import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dono3jbnt.css';
import '../../css/k/k46q_qb2n.css';
import '../../css/e/ei58v5bii.css';
import '../../css/u/ud5517b1d.css';
import '../../css/v/vasd38bfi.css';
import '../../css/z/z_lyx23mc.css';
import '../../css/r/rej2etb5q.css';
import '../../css/f/fi4b802my.css';
import '../../css/q/qlahhobeh.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wa7rlab4c.css';
import '../../css/x/xz7gqebix.css';
import '../../css/c/cd11v1dfj.css';
import '../../css/z/zc_13qbtx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dono3jbnt"/><path class="k46q_qb2n"/><path class="ei58v5bii"/><path class="ud5517b1d"/><path class="vasd38bfi"/><path class="z_lyx23mc"/><path class="rej2etb5q"/><path class="fi4b802my"/><path class="qlahhobeh"/><g class="ij2x_72vy"><path class="wa7rlab4c"/><path class="xz7gqebix"/><path class="cd11v1dfj"/><path class="zc_13qbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:monorail"} {...others} />);
}

export default Component;
