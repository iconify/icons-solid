import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/t/t4s6mac-y.css';
import '../../css/w/w8gxl9-7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="pr52f_b5y"><path class="t4s6mac-y"/><path class="w8gxl9-7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:plastic-surgery"} {...others} />);
}

export default Component;
