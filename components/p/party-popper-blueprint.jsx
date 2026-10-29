import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s2uza_ixb.css';
import '../../css/a/a1o8ly8eq.css';
import '../../css/z/zickbgbqk.css';
import '../../css/s/sk3wpjbbr.css';
import '../../css/r/r800bg3-r.css';
import '../../css/y/ymiw1l41d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s2uza_ixb wm-deco"/><path class="a1o8ly8eq wm-deco"/><path class="wm-deco zickbgbqk"/><path class="sk3wpjbbr wm-k"/><path class="r800bg3-r wm-a"/><path class="wm-s ymiw1l41d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:party-popper-blueprint"} {...others} />);
}

export default Component;
