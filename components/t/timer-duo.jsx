import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it_b6ibho.css';
import '../../css/c/cwnti_bpv.css';
import '../../css/c/cup7wj97d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="it_b6ibho"/><path class="cwnti_bpv"/><path class="cup7wj97d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-duo"} {...others} />);
}

export default Component;
