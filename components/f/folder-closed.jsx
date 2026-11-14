import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rp-j3wbxw.css';
import '../../css/l/lqegcd5uy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="rp-j3wbxw"/><path class="lqegcd5uy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-closed"} {...others} />);
}

export default Component;
