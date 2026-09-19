import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/uqhhy6b8o.css';
import '../../css/r/rgid1o2rx.css';
import '../../css/v/vopqe3b4y.css';
import '../../css/z/zbr8iebbq.css';
import '../../css/x/xrppjjb4d.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="uqhhy6b8o"/><path class="rgid1o2rx"/><path class="vopqe3b4y"/><circle class="zbr8iebbq"/><path class="xrppjjb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:kp"} {...others} />);
}

export default Component;
