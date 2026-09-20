import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3s_59bff.css';
import '../../css/o/o6tcadbfr.css';
import '../../css/o/oomb74bzs.css';
import '../../css/c/cx0jtacae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z3s_59bff"/><path class="o6tcadbfr"/><path class="oomb74bzs"/><path class="cx0jtacae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-linear"} {...others} />);
}

export default Component;
