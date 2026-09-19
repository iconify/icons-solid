import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyto8pb-r.css';
import '../../css/q/qq9jsubwp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gyto8pb-r"/><path class="qq9jsubwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:port-input"} {...others} />);
}

export default Component;
