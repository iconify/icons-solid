import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jo_r_0bvz.css';
import '../../css/x/xezfabb3u.css';
import '../../css/b/b0787_b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jo_r_0bvz"/><path class="xezfabb3u"/><path class="b0787_b7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-square-2-line-duotone"} {...others} />);
}

export default Component;
