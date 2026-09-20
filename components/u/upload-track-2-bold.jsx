import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtedal7-d.css';
import '../../css/d/dd4h-rb-k.css';
import '../../css/y/yrwd8544h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dtedal7-d"/><path class="dd4h-rb-k"/><path clip-rule="evenodd" class="yrwd8544h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-2-bold"} {...others} />);
}

export default Component;
