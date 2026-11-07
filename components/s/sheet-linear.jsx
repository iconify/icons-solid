import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hyvc97btq.css';
import '../../css/c/ck53_x6oq.css';
import '../../css/y/yklwhpb-j.css';
import '../../css/c/cm4zj5gvq.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hyvc97btq"/><path class="ck53_x6oq"/><path class="yklwhpb-j"/><path class="cm4zj5gvq"/><path class="xvjk-cbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sheet-linear"} {...others} />);
}

export default Component;
