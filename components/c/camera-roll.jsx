import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duwc1vbbx.css';
import '../../css/w/w9p-hib0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="duwc1vbbx"/><path class="w9p-hib0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:camera-roll"} {...others} />);
}

export default Component;
