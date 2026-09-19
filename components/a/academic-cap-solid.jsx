import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ck9a2y9bt.css';
import '../../css/h/hyklb6qnw.css';
import '../../css/t/tq2ype9_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ck9a2y9bt"/><path class="hyklb6qnw"/><path class="tq2ype9_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:academic-cap-solid"} {...others} />);
}

export default Component;
