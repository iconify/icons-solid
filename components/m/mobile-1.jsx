import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4adrdbbc.css';
import '../../css/w/wpr94kbcg.css';
import '../../css/o/o278vf_zl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="n4adrdbbc"/><path class="wpr94kbcg"/><path class="o278vf_zl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:mobile-1"} {...others} />);
}

export default Component;
