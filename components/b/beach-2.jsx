import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/d/dc63gxbnf.css';
import '../../css/t/tx1i3cpib.css';
import '../../css/y/y-iq_q5bj.css';
import '../../css/m/mgflizbai.css';
import '../../css/h/hkge2mz8i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="dc63gxbnf"/><path class="tx1i3cpib"/><path class="y-iq_q5bj"/><path class="mgflizbai"/><path class="hkge2mz8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:beach-2"} {...others} />);
}

export default Component;
