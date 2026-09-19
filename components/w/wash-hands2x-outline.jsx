import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4pbug86i.css';
import '../../css/l/l7fiaob4l.css';
import '../../css/w/w4xi5ecbh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4pbug86i"/><path class="l7fiaob4l"/><path clip-rule="evenodd" class="w4xi5ecbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:wash-hands2x-outline"} {...others} />);
}

export default Component;
