import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rvwevkjfg.css';
import '../../css/l/l5-hd6bdz.css';
import '../../css/z/z8bnfqcup.css';
import '../../css/v/v3sltc50x.css';
import '../../css/t/tqylwdbgl.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rvwevkjfg wm-shadow"/><path class="l5-hd6bdz"/><path class="z8bnfqcup"/><path class="v3sltc50x"/><path class="tqylwdbgl wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mail"} {...others} />);
}

export default Component;
