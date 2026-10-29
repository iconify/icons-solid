import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j9_j8dbvc.css';
import '../../css/c/cv9qarb9d.css';
import '../../css/e/e1_04ekok.css';
import '../../css/h/h1datpb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j9_j8dbvc wm-deco"/><path class="cv9qarb9d wm-k"/><path class="e1_04ekok wm-s"/><path class="h1datpb6p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-drive-blueprint"} {...others} />);
}

export default Component;
