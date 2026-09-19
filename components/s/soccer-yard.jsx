import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bgnwnnb7h.css';
import '../../css/e/e07xtbcor.css';
import '../../css/v/vw3vokb7j.css';
import '../../css/g/gcnjpdm8x.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="bgnwnnb7h"/><path class="e07xtbcor"/><path class="vw3vokb7j"/><path class="gcnjpdm8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:soccer-yard"} {...others} />);
}

export default Component;
