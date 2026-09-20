import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_nardezx.css';
import '../../css/n/np2b7cb0n.css';
import '../../css/h/hadlcjb_i.css';
import '../../css/k/kqce53bsq.css';
import '../../css/f/ffu7fooyt.css';
import '../../css/h/hl-2alb-f.css';
import '../../css/i/iyb97lb4a.css';
import '../../css/x/xrbx4bb2w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t_nardezx"/><path class="np2b7cb0n"/><path class="hadlcjb_i"/><path class="kqce53bsq"/><path class="ffu7fooyt"/><path class="hl-2alb-f"/><path class="iyb97lb4a"/><path class="xrbx4bb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hold"} {...others} />);
}

export default Component;
