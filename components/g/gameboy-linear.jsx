import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aymhwhb8v.css';
import '../../css/e/er5hmdbdf.css';
import '../../css/r/rn5innbyw.css';
import '../../css/k/klcdbfe3f.css';
import '../../css/c/cz3jkzutv.css';
import '../../css/z/zhbw671gb.css';
import '../../css/l/lkjawhb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aymhwhb8v"/><path class="er5hmdbdf"/><path class="rn5innbyw"/><path class="klcdbfe3f"/><path class="cz3jkzutv"/><path class="zhbw671gb"/><path class="lkjawhb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gameboy-linear"} {...others} />);
}

export default Component;
