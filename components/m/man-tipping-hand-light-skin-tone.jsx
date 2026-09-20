import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipop5yyqc.css';
import '../../css/w/wi_bsxssg.css';
import '../../css/n/nyljs-bwm.css';
import '../../css/l/ltp463b0e.css';
import '../../css/b/bp5f_tb7l.css';
import '../../css/e/e881j01wa.css';
import '../../css/s/soxdf5zox.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ipop5yyqc"/><path class="wi_bsxssg"/><path class="nyljs-bwm"/><path class="ltp463b0e"/><path class="bp5f_tb7l"/><path class="e881j01wa"/><path class="soxdf5zox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-tipping-hand-light-skin-tone"} {...others} />);
}

export default Component;
