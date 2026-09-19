import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2f5qo9ra.css';
import '../../css/n/n-88vfcwe.css';
import '../../css/h/hphoz6f5k.css';
import '../../css/r/rgq2tbmxq.css';
import '../../css/k/kinyf4bfq.css';
import '../../css/u/umz_u252p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u2f5qo9ra"/><path class="n-88vfcwe"/><path class="hphoz6f5k"/><circle class="rgq2tbmxq"/><path class="kinyf4bfq"/><path class="umz_u252p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:satellite-dish"} {...others} />);
}

export default Component;
