import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hje1fwb1w.css';
import '../../css/z/z88ljobbe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hje1fwb1w"/><path clip-rule="evenodd" class="z88ljobbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diabetes-measure"} {...others} />);
}

export default Component;
