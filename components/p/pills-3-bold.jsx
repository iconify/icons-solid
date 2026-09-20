import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuktvobmv.css';
import '../../css/m/mo3q1vkji.css';
import '../../css/x/xv0nadbwq.css';
import '../../css/n/nmn5tpjbj.css';
import '../../css/r/ry2qzlfsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wuktvobmv"/><path class="mo3q1vkji"/><path class="xv0nadbwq"/><path class="nmn5tpjbj"/><path class="ry2qzlfsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-3-bold"} {...others} />);
}

export default Component;
