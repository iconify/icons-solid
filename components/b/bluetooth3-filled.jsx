import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkfcfs20r.css';
import '../../css/j/jjrcuzb2k.css';
import '../../css/y/yb-f48xmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lkfcfs20r"/><path class="jjrcuzb2k"/><path class="yb-f48xmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bluetooth3-filled"} {...others} />);
}

export default Component;
