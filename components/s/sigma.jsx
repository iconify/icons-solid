import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bw7ck5b1m.css';
import '../../css/w/wtzo24bgv.css';
import '../../css/v/vdw9lp5_p.css';
import '../../css/u/ub2b8c_3z.css';
import '../../css/e/e1hai-b0f.css';
import '../../css/q/q5in__i_l.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bw7ck5b1m wm-shadow"/><path class="wtzo24bgv"/><path class="vdw9lp5_p"/><path class="ub2b8c_3z"/><path class="e1hai-b0f wm-shine"/><path class="q5in__i_l wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sigma"} {...others} />);
}

export default Component;
