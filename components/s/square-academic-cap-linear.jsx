import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rjomr8bgz.css';
import '../../css/p/p3_4el9va.css';
import '../../css/c/csckydbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rjomr8bgz"/><path class="p3_4el9va"/><path class="csckydbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-linear"} {...others} />);
}

export default Component;
