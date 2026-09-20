import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pb_k2wbwf.css';
import '../../css/k/kbnpw5klq.css';
import '../../css/a/ae_kflb8j.css';
import '../../css/v/vwauyjbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pb_k2wbwf"/><path class="kbnpw5klq"/><path class="ae_kflb8j"/><path class="vwauyjbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rainbow-bold"} {...others} />);
}

export default Component;
