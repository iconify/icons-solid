import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_dr-7b6c.css';
import '../../css/i/i-gy2zd_f.css';
import '../../css/j/jqfpyp4_k.css';
import '../../css/w/w7kjrkbfd.css';
import '../../css/d/d89ocvbvg.css';
import '../../css/c/cgeq3x1af.css';
import '../../css/q/qrombdnwa.css';
import '../../css/g/gsotllbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z_dr-7b6c"/><path class="i-gy2zd_f"/><path class="jqfpyp4_k"/><path class="w7kjrkbfd"/><path class="d89ocvbvg"/><path class="cgeq3x1af"/><path class="qrombdnwa"/><path class="gsotllbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:bowling-set"} {...others} />);
}

export default Component;
