import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xu1gn07mv.css';
import '../../css/r/rcd_5-bdr.css';
import '../../css/w/wogcsmb-x.css';
import '../../css/w/wycl71bul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="xu1gn07mv"/><path class="rcd_5-bdr"/><path class="wogcsmb-x"/><path class="wycl71bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:map-pin"} {...others} />);
}

export default Component;
