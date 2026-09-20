import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbxppib8v.css';
import '../../css/x/x5dhb32tx.css';
import '../../css/y/y63rn4blt.css';
import '../../css/j/j2ry_p8_q.css';
import '../../css/m/ma15wbcmb.css';
import '../../css/m/mzud7_fkk.css';
import '../../css/i/i7m5n9bke.css';
import '../../css/m/mc-f51v8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tbxppib8v"/><path class="x5dhb32tx"/><path class="y63rn4blt"/><path class="j2ry_p8_q"/><path class="ma15wbcmb"/><path class="mzud7_fkk"/><path class="i7m5n9bke"/><path class="mc-f51v8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:megaphone"} {...others} />);
}

export default Component;
