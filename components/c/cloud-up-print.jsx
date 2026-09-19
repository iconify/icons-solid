import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbxdvzjvn.css';
import '../../css/y/ypdia9bkn.css';
import '../../css/m/mxb79nbaf.css';
import '../../css/x/x5ekm4b9c.css';
import '../../css/d/dvl474wgs.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbxdvzjvn"/><path clip-rule="evenodd" class="ypdia9bkn"/><path class="mxb79nbaf"/><path class="x5ekm4b9c"/><path class="dvl474wgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cloud-up-print"} {...others} />);
}

export default Component;
