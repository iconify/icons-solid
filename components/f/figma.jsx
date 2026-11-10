import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnqf9xb-m.css';
import '../../css/d/d1gtvkbbd.css';
import '../../css/r/rup194bda.css';
import '../../css/u/u36v7kbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pnqf9xb-m"/><rect transform="matrix(-1 0 0 1 18.167 8.917)" class="d1gtvkbbd"/><path class="rup194bda"/><path class="u36v7kbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:figma"} {...others} />);
}

export default Component;
