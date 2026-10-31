import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/b/b7rx3y3vg.css';
import '../../css/x/xe5_nnbmv.css';
import '../../css/u/u8leifbmi.css';
import '../../css/p/pjotn7bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="b7rx3y3vg"/><path class="xe5_nnbmv"/><path class="u8leifbmi"/><path class="pjotn7bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:captions"} {...others} />);
}

export default Component;
