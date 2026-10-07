import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hj7z5ybgc.css';
import '../../css/w/wcaqembsu.css';
import '../../css/a/aw4ka-b3k.css';
import '../../css/w/wfu7tzb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="hj7z5ybgc"/><path class="wcaqembsu"/><path class="aw4ka-b3k"/><path class="wfu7tzb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:donate"} {...others} />);
}

export default Component;
