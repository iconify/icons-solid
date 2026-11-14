import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cy6f4kbma.css';
import '../../css/b/btkw-59hw.css';
import '../../css/c/ck4bgcbho.css';
import '../../css/b/bxazgqbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="cy6f4kbma"/><path class="btkw-59hw"/><path class="ck4bgcbho"/><path class="bxazgqbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-down"} {...others} />);
}

export default Component;
