import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-oytwb8e.css';
import '../../css/b/bqnwlwbde.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="a-oytwb8e"/><path clip-rule="evenodd" class="bqnwlwbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cervical-cancer"} {...others} />);
}

export default Component;
