import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xqkru5bld.css';
import '../../css/d/dcuv42beu.css';
import '../../css/u/u0i6-8b9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xqkru5bld"/><path class="dcuv42beu"/><path class="u0i6-8b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bed-bunk"} {...others} />);
}

export default Component;
