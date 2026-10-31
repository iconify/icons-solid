import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2-cudgzz.css';
import '../../css/n/nuotczzel.css';
import '../../css/w/wlabr1bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s2-cudgzz wm-k"/><path class="nuotczzel wm-shine"/><path class="wlabr1bst wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:notepad-text"} {...others} />);
}

export default Component;
