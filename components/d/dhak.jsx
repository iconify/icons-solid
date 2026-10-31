import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/frfg72bgr.css';
import '../../css/t/tdew__0uo.css';
import '../../css/y/ykuz_2j_y.css';
import '../../css/k/krv73gbff.css';
import '../../css/z/zo_1kcbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="frfg72bgr wm-shadow"/><path class="tdew__0uo wm-shadow"/><path class="ykuz_2j_y"/><path class="krv73gbff"/><path class="zo_1kcbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dhak"} {...others} />);
}

export default Component;
