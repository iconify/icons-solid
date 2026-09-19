import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oh-xsqbcg.css';
import '../../css/q/q_oue32hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oh-xsqbcg"/><path class="q_oue32hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alarm-clock-check"} {...others} />);
}

export default Component;
