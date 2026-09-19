import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv1deiyek.css';
import '../../css/k/kg14vw5et.css';
import '../../css/p/pfjz1wg0j.css';
import '../../css/d/d5f13wc2z.css';
import '../../css/u/ucjr577xf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="nv1deiyek"/><path class="kg14vw5et"/><path class="pfjz1wg0j"/><path class="d5f13wc2z"/><path class="ucjr577xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:extend"} {...others} />);
}

export default Component;
