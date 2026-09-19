import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpvr8onco.css';
import '../../css/f/f1r-u_ohq.css';
import '../../css/p/p8igeb0vv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vpvr8onco"/><path class="f1r-u_ohq"/><path class="p8igeb0vv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:three-triangles"} {...others} />);
}

export default Component;
