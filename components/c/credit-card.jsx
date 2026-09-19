import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ziim80_xf.css';
import '../../css/t/tfyqlupub.css';
import '../../css/z/z0t8b_bxs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="ziim80_xf"/><path class="tfyqlupub"/><path class="z0t8b_bxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:credit-card"} {...others} />);
}

export default Component;
