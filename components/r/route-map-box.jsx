import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwntu8bzo.css';
import '../../css/l/llshmfzww.css';
import '../../css/b/b_gi454yn.css';
import '../../css/l/l50u1gugz.css';
import '../../css/i/ij2ll_r3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="rwntu8bzo"/><circle class="llshmfzww"/><path class="b_gi454yn"/><path class="l50u1gugz"/><path class="ij2ll_r3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:route-map-box"} {...others} />);
}

export default Component;
