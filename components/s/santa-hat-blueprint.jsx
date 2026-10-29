import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x9iy5-b4w.css';
import '../../css/y/yvlpt87dq.css';
import '../../css/l/lusu08b_g.css';
import '../../css/c/c-rwg44xn.css';
import '../../css/m/m129ctbgm.css';
import '../../css/f/fxfoz_mdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco x9iy5-b4w"/><path class="wm-deco yvlpt87dq"/><path class="lusu08b_g wm-deco"/><path class="c-rwg44xn wm-k"/><path class="m129ctbgm wm-a"/><path class="fxfoz_mdu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:santa-hat-blueprint"} {...others} />);
}

export default Component;
