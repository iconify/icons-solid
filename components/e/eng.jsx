import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/irkrqgmxa.css';
import '../../css/o/oba8g1b-j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="irkrqgmxa"/><path class="oba8g1b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:eng"} {...others} />);
}

export default Component;
