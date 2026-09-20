import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kinyqzbsz.css';
import '../../css/s/szjd6r78e.css';
import '../../css/p/p103cbcyv.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(4 3)" class="bi12bsetm"><path class="kinyqzbsz"/><path class="szjd6r78e"/><circle class="p103cbcyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:door"} {...others} />);
}

export default Component;
