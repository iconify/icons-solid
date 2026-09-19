import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0phu2bbs.css';
import '../../css/f/f0j3glb_n.css';
import '../../css/l/lio3osqhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s0phu2bbs"><circle class="f0j3glb_n"/><path class="lio3osqhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:music-1-bold"} {...others} />);
}

export default Component;
