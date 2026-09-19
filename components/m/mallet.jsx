import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiz_gfbwv.css';
import '../../css/u/uhsqvfb2c.css';
import '../../css/s/s2_p72bhe.css';
import '../../css/m/meuj3rb7k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kiz_gfbwv"/><path class="uhsqvfb2c"/><path clip-rule="evenodd" class="s2_p72bhe"/><path class="meuj3rb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:mallet"} {...others} />);
}

export default Component;
