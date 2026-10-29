import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u4synlg4b.css';
import '../../css/c/cd-6u1e9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u4synlg4b"/><path class="cd-6u1e9y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-plus"} {...others} />);
}

export default Component;
