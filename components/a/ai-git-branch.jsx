import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpv21hb3o.css';
import '../../css/h/h3d6wbbau.css';
import '../../css/j/jqgrt3b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kpv21hb3o"/><path class="h3d6wbbau"/><path class="jqgrt3b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-git-branch"} {...others} />);
}

export default Component;
