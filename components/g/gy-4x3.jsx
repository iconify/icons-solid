import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f7y2hlb3d.css';
import '../../css/d/dbage8b7q.css';
import '../../css/l/leb2mbckx.css';
import '../../css/v/vxcr2--rx.css';
import '../../css/v/vknpr9blr.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="f7y2hlb3d"/><path class="dbage8b7q"/><path class="leb2mbckx"/><path class="vxcr2--rx"/><path class="vknpr9blr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gy-4x3"} {...others} />);
}

export default Component;
