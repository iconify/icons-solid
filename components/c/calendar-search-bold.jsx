import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxh696bpo.css';
import '../../css/s/s8zvn4tvb.css';
import '../../css/p/p7q_-seqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jxh696bpo"/><path class="s8zvn4tvb"/><path class="p7q_-seqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-search-bold"} {...others} />);
}

export default Component;
