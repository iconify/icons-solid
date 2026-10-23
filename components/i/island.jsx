import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9l253_we.css';
import '../../css/t/tnh5r9ewm.css';
import '../../css/w/w0p0gjbdt.css';
import '../../css/w/wgam8gbcr.css';
import '../../css/e/eh2_tfbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d9l253_we"/><path class="tnh5r9ewm"/><path class="w0p0gjbdt"/><path class="wgam8gbcr"/><path class="eh2_tfbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:island"} {...others} />);
}

export default Component;
