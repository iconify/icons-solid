import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wb7_65b-g.css';
import '../../css/v/vkdts-b4s.css';
import '../../css/l/lzvosfbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wb7_65b-g"/><path class="vkdts-b4s"/><path class="lzvosfbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setting-done-04"} {...others} />);
}

export default Component;
