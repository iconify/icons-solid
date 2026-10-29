import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dhvk_0bdk.css';
import '../../css/x/xgo30jsvb.css';
import '../../css/w/wn6q_obzm.css';
import '../../css/y/yyyu1pbcf.css';
import '../../css/w/wdofi-bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dhvk_0bdk wm-deco"/><path class="wm-deco xgo30jsvb"/><path class="wm-deco wn6q_obzm"/><path class="yyyu1pbcf"/><path class="wdofi-bnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clover-blueprint"} {...others} />);
}

export default Component;
