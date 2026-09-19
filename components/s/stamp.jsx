import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ol1i1obiv.css';
import '../../css/q/q66k1oafp.css';
import '../../css/m/mm9ogz13k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ol1i1obiv"/><path class="q66k1oafp"/><path class="mm9ogz13k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stamp"} {...others} />);
}

export default Component;
