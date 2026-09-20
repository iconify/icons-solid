import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad4x7oblk.css';
import '../../css/w/wotaafb6p.css';
import '../../css/g/g2lch4bat.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ad4x7oblk"/><path class="wotaafb6p"/><path class="g2lch4bat"/><path class="o1cpgsbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-bold-duotone"} {...others} />);
}

export default Component;
