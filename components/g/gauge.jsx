import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g5te30-az.css';
import '../../css/k/kx5d14bvf.css';
import '../../css/e/euflb0bla.css';
import '../../css/p/pt0k9cbgs.css';
import '../../css/b/bfvhiccdv.css';
import '../../css/c/cx4uglfpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g5te30-az wm-shadow"/><path class="kx5d14bvf"/><path class="euflb0bla"/><path class="pt0k9cbgs"/><path class="bfvhiccdv"/><path class="cx4uglfpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gauge"} {...others} />);
}

export default Component;
