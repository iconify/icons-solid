import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/aa0-oz1tb.css';
import '../../css/a/a13gwabeh.css';
import '../../css/x/x8rd04bze.css';
import '../../css/b/bamk7d0lx.css';
import '../../css/n/nt7gnbbtj.css';
import '../../css/g/gmofzdb5w.css';
import '../../css/a/afzks7g-x.css';
import '../../css/q/q5in__i_l.css';
import '../../css/p/pyfndu2cg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="aa0-oz1tb wm-shadow"/><path class="a13gwabeh"/><path class="x8rd04bze"/><path class="bamk7d0lx"/><path class="nt7gnbbtj"/><path class="gmofzdb5w"/><path class="afzks7g-x wm-shine"/><path class="q5in__i_l wm-deco"/><path class="pyfndu2cg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:users"} {...others} />);
}

export default Component;
