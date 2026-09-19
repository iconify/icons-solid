import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nw028df8b.css';
import '../../css/t/tuiv5pbxl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="nw028df8b"/><path class="tuiv5pbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-bar-graph"} {...others} />);
}

export default Component;
