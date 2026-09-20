import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0-jx1bpp.css';
import '../../css/k/kx_1d-sfu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xecxklbhv.css';
import '../../css/x/xfdyl25bs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a0-jx1bpp"/><path class="kx_1d-sfu"/><g class="ij2x_72vy"><circle class="xecxklbhv"/><path class="xfdyl25bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ring"} {...others} />);
}

export default Component;
