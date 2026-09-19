import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o_47jcb2f.css';
import '../../css/j/jfyalhbxw.css';
import '../../css/v/vvdsu0box.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="o_47jcb2f"/><path class="jfyalhbxw"/><path class="vvdsu0box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:beer"} {...others} />);
}

export default Component;
