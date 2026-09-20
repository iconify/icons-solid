import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dpqjl1opr.css';
import '../../css/j/jwd-jrevq.css';
import '../../css/q/q90b_qbjv.css';
import '../../css/j/j9zbk3bom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect transform="rotate(90 16 9)" class="dpqjl1opr"/><rect transform="rotate(90 20 17)" class="jwd-jrevq"/><path class="q90b_qbjv"/><path class="j9zbk3bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:subttasks-alt"} {...others} />);
}

export default Component;
