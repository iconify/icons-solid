import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgzei7vtu.css';
import '../../css/f/fsyra4d0z.css';
import '../../css/a/aml8zws_b.css';
import '../../css/c/cq5n6gb-g.css';
import '../../css/k/knhjp-kxc.css';
import '../../css/e/em05nxbjs.css';
import '../../css/m/mvdk7prrk.css';
import '../../css/a/ad-9rxbxb.css';
import '../../css/m/md1fu3r_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bgzei7vtu"/><path class="fsyra4d0z"/><path class="aml8zws_b"/><path class="cq5n6gb-g"/><path class="knhjp-kxc"/><path class="em05nxbjs"/><path class="mvdk7prrk"/><path class="ad-9rxbxb"/><path class="md1fu3r_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:presentation-projector-screen-budget-analytics"} {...others} />);
}

export default Component;
