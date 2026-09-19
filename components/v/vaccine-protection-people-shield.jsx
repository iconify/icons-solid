import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jtybx7bnc.css';
import '../../css/m/mtc995bac.css';
import '../../css/c/cjriokfje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jtybx7bnc"/><path class="mtc995bac"/><path class="cjriokfje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-people-shield"} {...others} />);
}

export default Component;
