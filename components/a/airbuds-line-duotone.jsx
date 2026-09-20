import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3s_59bff.css';
import '../../css/o/o6tcadbfr.css';
import '../../css/b/bop1i6gap.css';
import '../../css/h/h_7-4osld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z3s_59bff"/><path class="o6tcadbfr"/><path class="bop1i6gap"/><path class="h_7-4osld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-line-duotone"} {...others} />);
}

export default Component;
