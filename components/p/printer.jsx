import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sfdv74bik.css';
import '../../css/m/medbz2b1j.css';
import '../../css/r/rfgv0sb9j.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="rotate(-90 10.5 8.5)" class="bi12bsetm"><path class="sfdv74bik"/><path class="medbz2b1j"/><circle class="rfgv0sb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:printer"} {...others} />);
}

export default Component;
