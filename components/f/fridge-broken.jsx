import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yubjjdbth.css';
import '../../css/c/c7zikwrvh.css';
import '../../css/x/xzg6x68cp.css';
import '../../css/x/xc_fo9bdv.css';
import '../../css/f/f26ggybga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yubjjdbth"/><path class="c7zikwrvh"/><path class="xzg6x68cp"/><path class="xc_fo9bdv"/><path class="f26ggybga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-broken"} {...others} />);
}

export default Component;
