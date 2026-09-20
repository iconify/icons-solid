import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi360ub3v.css';
import '../../css/z/zx6p1mxlm.css';
import '../../css/p/pkuo_xbsn.css';
import '../../css/d/dapqk4b1q.css';
import '../../css/t/t1mr37dne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hi360ub3v"/><path clip-rule="evenodd" class="zx6p1mxlm"/><path class="pkuo_xbsn"/><path class="dapqk4b1q"/><path class="t1mr37dne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:incognito-duotone"} {...others} />);
}

export default Component;
