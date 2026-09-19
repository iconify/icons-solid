import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o84_2lbma.css';
import '../../css/l/ltfbp1rgr.css';
import '../../css/o/oz_6r38tv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o84_2lbma"/><path class="ltfbp1rgr"/><path class="oz_6r38tv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:yen-receive"} {...others} />);
}

export default Component;
