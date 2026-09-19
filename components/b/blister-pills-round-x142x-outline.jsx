import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbtmgmbdx.css';
import '../../css/i/i5hnbmgxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="bbtmgmbdx"/><path clip-rule="evenodd" class="i5hnbmgxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-round-x142x-outline"} {...others} />);
}

export default Component;
