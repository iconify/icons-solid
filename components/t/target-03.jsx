import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vyzc02u8i.css';
import '../../css/s/sf22lfdxb.css';
import '../../css/m/miaafxb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="vyzc02u8i"/><path class="sf22lfdxb"/><path class="miaafxb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:target-03"} {...others} />);
}

export default Component;
