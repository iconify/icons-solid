import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n8zs0qb3h.css';
import '../../css/a/ace-nuvps.css';
import '../../css/r/rvd7q59pv.css';
import '../../css/s/sb7v6-b6z.css';
import '../../css/l/lpln-2bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n8zs0qb3h"/><path class="ace-nuvps"/><path class="rvd7q59pv"/><path class="sb7v6-b6z"/><path class="lpln-2bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bed-linear"} {...others} />);
}

export default Component;
