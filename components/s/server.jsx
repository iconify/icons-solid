import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/enq2l8p_m.css';
import '../../css/o/o9q3skbhp.css';
import '../../css/p/ppm1aachj.css';
import '../../css/u/uk5pr39zp.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="enq2l8p_m"/><path class="o9q3skbhp"/><path class="ppm1aachj"/><path class="uk5pr39zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:server"} {...others} />);
}

export default Component;
