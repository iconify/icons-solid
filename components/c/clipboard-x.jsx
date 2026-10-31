import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fen1z1bzj.css';
import '../../css/q/qoykf60jf.css';
import '../../css/c/cclafi5wb.css';
import '../../css/x/xq5ngf4gc.css';
import '../../css/w/wnmirzb1y.css';
import '../../css/v/vv22jxbvp.css';
import '../../css/j/j36_0-bex.css';
import '../../css/y/yyuo7fbob.css';
import '../../css/u/u79ph6ihl.css';
import '../../css/r/r70tpi0ju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fen1z1bzj wm-k"/><path class="qoykf60jf wm-a"/><path class="cclafi5wb wm-deco"/><path class="wm-k xq5ngf4gc"/><path class="wm-k wnmirzb1y"/><path class="vv22jxbvp wm-a"/><path class="j36_0-bex wm-shadow"/><path class="wm-shine yyuo7fbob"/><path class="u79ph6ihl wm-shine"/><path class="r70tpi0ju wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:clipboard-x"} {...others} />);
}

export default Component;
