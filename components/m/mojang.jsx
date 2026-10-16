import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i605gv53f.css';
import '../../css/e/e_l8g4x7j.css';

const viewBox = {"width":682,"height":682,"left":58.75,"top":58.75};
const content = `<path class="i605gv53f"/><path class="e_l8g4x7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mojang"} {...others} />);
}

export default Component;
