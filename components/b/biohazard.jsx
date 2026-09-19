import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yhl7b5ooe.css';
import '../../css/d/dfmyzlbdw.css';
import '../../css/w/wf1t3dbyk.css';
import '../../css/x/xcd_k67zj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yhl7b5ooe"/><path class="dfmyzlbdw"/><path class="wf1t3dbyk"/><path class="xcd_k67zj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:biohazard"} {...others} />);
}

export default Component;
