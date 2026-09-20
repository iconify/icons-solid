import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqwn18b1s.css';
import '../../css/s/s7f1fwbbg.css';
import '../../css/w/wotaafb6p.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dqwn18b1s"/><path clip-rule="evenodd" class="s7f1fwbbg"/><path class="wotaafb6p"/><path class="o1cpgsbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-search-bold-duotone"} {...others} />);
}

export default Component;
