import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/db9ouff7d.css';
import '../../css/o/oo6tk_lwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="db9ouff7d"/><path class="oo6tk_lwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:percentage-square"} {...others} />);
}

export default Component;
