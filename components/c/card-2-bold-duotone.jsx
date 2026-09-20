import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad4x7oblk.css';
import '../../css/v/vju4z7oep.css';
import '../../css/j/j9na07rou.css';
import '../../css/m/m0a5tpbcr.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ad4x7oblk"/><path clip-rule="evenodd" class="vju4z7oep"/><path class="j9na07rou"/><path class="m0a5tpbcr"/><path class="o1cpgsbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-2-bold-duotone"} {...others} />);
}

export default Component;
