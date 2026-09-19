import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahro8jb1p.css';
import '../../css/d/d51ngz3_m.css';
import '../../css/k/kfmctjs9b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ahro8jb1p"/><path clip-rule="evenodd" class="d51ngz3_m"/><path clip-rule="evenodd" class="kfmctjs9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-exam-qualification"} {...others} />);
}

export default Component;
