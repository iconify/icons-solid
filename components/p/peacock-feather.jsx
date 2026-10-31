import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sglzdsb2k.css';
import '../../css/v/v56b0gb0z.css';
import '../../css/t/tc0p7nbfc.css';
import '../../css/x/x35pf_uyj.css';
import '../../css/a/az-55ob-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sglzdsb2k wm-shadow"/><path class="v56b0gb0z"/><path class="tc0p7nbfc"/><path class="x35pf_uyj"/><path class="az-55ob-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:peacock-feather"} {...others} />);
}

export default Component;
