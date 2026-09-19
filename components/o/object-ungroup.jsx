import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svbii8bvw.css';
import '../../css/t/tsi2e0_6j.css';
import '../../css/l/lhyyi3z4l.css';
import '../../css/s/s-htz7_sn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="svbii8bvw"/><path class="tsi2e0_6j"/><path class="lhyyi3z4l"/><path class="s-htz7_sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:object-ungroup"} {...others} />);
}

export default Component;
