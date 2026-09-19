import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc_uuzb-u.css';
import '../../css/d/dpgvrjd0j.css';
import '../../css/v/vyk1e9bbt.css';
import '../../css/t/trbaiac_h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kc_uuzb-u"/><path class="dpgvrjd0j"/><path class="vyk1e9bbt"/><path class="trbaiac_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tent"} {...others} />);
}

export default Component;
