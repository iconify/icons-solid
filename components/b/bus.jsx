import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7yqrfboi.css';
import '../../css/i/irnj_wb1f.css';
import '../../css/s/szm8_hbfe.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1 3)" class="n1lsf0bnc"><ellipse class="k7yqrfboi"/><circle class="irnj_wb1f"/><path class="szm8_hbfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bus"} {...others} />);
}

export default Component;
