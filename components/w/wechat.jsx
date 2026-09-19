import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ylgqmfbdd.css';
import '../../css/i/iwtnawb_g.css';
import '../../css/z/zp_xt8olr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ylgqmfbdd"/><path class="iwtnawb_g"/><path class="zp_xt8olr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wechat"} {...others} />);
}

export default Component;
