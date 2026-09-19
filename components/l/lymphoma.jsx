import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/walizobbk.css';
import '../../css/u/uvoll-b0c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="walizobbk"/><path clip-rule="evenodd" class="uvoll-b0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lymphoma"} {...others} />);
}

export default Component;
