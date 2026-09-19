import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et-jf20mo.css';
import '../../css/a/a9s0llb_c.css';
import '../../css/d/dthcxeb8v.css';
import '../../css/k/k-p4f3sbw.css';
import '../../css/x/xc31xiz5m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="et-jf20mo"/><path class="a9s0llb_c"/><path class="dthcxeb8v"/><path class="k-p4f3sbw"/><path class="xc31xiz5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:frontfacingchick"} {...others} />);
}

export default Component;
