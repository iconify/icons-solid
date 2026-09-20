import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi2xxu4kz.css';
import '../../css/b/btfo-w2vc.css';
import '../../css/f/foq9udbya.css';
import '../../css/f/fv1t98_un.css';
import '../../css/f/f9o0f_bxl.css';
import '../../css/j/jdzrac_6f.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="pi2xxu4kz"/><path class="btfo-w2vc"/><path class="foq9udbya"/><path class="fv1t98_un"/><path class="f9o0f_bxl"/><path class="jdzrac_6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:snowman"} {...others} />);
}

export default Component;
