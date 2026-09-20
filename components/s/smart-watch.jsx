import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cledrguzw.css';
import '../../css/v/vde1zsqvi.css';
import '../../css/b/b82_bfbnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cledrguzw"/><path clip-rule="evenodd" class="vde1zsqvi"/><path class="b82_bfbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:smart-watch"} {...others} />);
}

export default Component;
