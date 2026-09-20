import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chr1acb-v.css';
import '../../css/y/yugwo7b3o.css';
import '../../css/r/r_amhvbap.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/ubtitpbsd.css';
import '../../css/p/pod_bnbkb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="chr1acb-v"/><path class="yugwo7b3o"/><path class="r_amhvbap"/><g class="ij2x_72vy"><path class="ubtitpbsd"/><path class="pod_bnbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:donkey"} {...others} />);
}

export default Component;
