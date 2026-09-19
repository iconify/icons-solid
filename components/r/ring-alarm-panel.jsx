import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwu8b083h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwu8b083h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ring-alarm-panel"} {...others} />);
}

export default Component;
