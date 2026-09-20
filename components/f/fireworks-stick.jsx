import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0bxe4bzw.css';
import '../../css/t/t0copwbwr.css';
import '../../css/e/e49_o-b7s.css';
import '../../css/v/vdp671b5w.css';
import '../../css/j/j-g55v1at.css';
import '../../css/j/j-x1y7xqw.css';
import '../../css/k/kwjav_btr.css';
import '../../css/n/ntnv6ybhc.css';
import '../../css/c/c4gm9db-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v0bxe4bzw"/><path class="t0copwbwr"/><path class="e49_o-b7s"/><path class="vdp671b5w"/><path class="j-g55v1at"/><path class="j-x1y7xqw"/><path class="kwjav_btr"/><path class="ntnv6ybhc"/><path class="c4gm9db-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fireworks-stick"} {...others} />);
}

export default Component;
