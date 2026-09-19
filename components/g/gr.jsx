import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fa6lstzyt.css';
import '../../css/p/pe-28bbuz.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="bi12bsetm"><path class="fa6lstzyt"/><path class="pe-28bbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gr"} {...others} />);
}

export default Component;
