import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6w6z2h9y.css';
import '../../css/d/d-uxzpbkq.css';
import '../../css/j/j4uzf0vrh.css';
import '../../css/h/hxxqm6bcp.css';
import '../../css/v/vpc_nobch.css';
import '../../css/b/bpicxyjew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j6w6z2h9y wm-k"/><path class="d-uxzpbkq wm-deco"/><path class="j4uzf0vrh wm-k"/><path class="hxxqm6bcp wm-k"/><path class="vpc_nobch wm-shadow"/><path class="bpicxyjew wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-video"} {...others} />);
}

export default Component;
