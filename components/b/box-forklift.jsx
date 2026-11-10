import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kunj1f1_o.css';
import '../../css/o/oqyif3v3d.css';
import '../../css/m/myeoczb3e.css';
import '../../css/r/r_metxi8c.css';
import '../../css/i/i3s6pvbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kunj1f1_o"/><path class="oqyif3v3d"/><path class="myeoczb3e"/><path class="r_metxi8c"/><path class="i3s6pvbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:box-forklift"} {...others} />);
}

export default Component;
