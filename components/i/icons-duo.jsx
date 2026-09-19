import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esli9ub9v.css';
import '../../css/k/k8m0tfb2t.css';
import '../../css/s/sltmlw_oe.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="esli9ub9v"/><path class="k8m0tfb2t"/><path class="sltmlw_oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:icons-duo"} {...others} />);
}

export default Component;
