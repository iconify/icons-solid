import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkkxv_q2b.css';
import '../../css/q/q3d7tt-zk.css';
import '../../css/d/d47xi2b9o.css';
import '../../css/v/v0vxv2kcw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pkkxv_q2b"/><path class="q3d7tt-zk"/><path class="d47xi2b9o"/><path class="v0vxv2kcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:dollar"} {...others} />);
}

export default Component;
