import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwqxrzb-l.css';
import '../../css/s/s18h12q8x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qwqxrzb-l"/><path class="s18h12q8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:traffic-event"} {...others} />);
}

export default Component;
