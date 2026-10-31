import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zltitfpfl.css';
import '../../css/b/bsbg6bbwt.css';
import '../../css/m/mj164lbcq.css';
import '../../css/b/bvmvrfbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zltitfpfl"/><path class="bsbg6bbwt"/><path class="mj164lbcq"/><path class="bvmvrfbtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shovel"} {...others} />);
}

export default Component;
