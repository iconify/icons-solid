import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbfesfb-f.css';
import '../../css/s/s58xh1bug.css';
import '../../css/h/hxatvrbps.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rbfesfb-f"/><path class="s58xh1bug"/><path clip-rule="evenodd" class="hxatvrbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:car-battery-charging-flat"} {...others} />);
}

export default Component;
