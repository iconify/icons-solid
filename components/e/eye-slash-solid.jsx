import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1y8b68qt.css';
import '../../css/c/cg7m802ly.css';
import '../../css/c/czoppacab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z1y8b68qt"/><path class="cg7m802ly"/><path class="czoppacab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:eye-slash-solid"} {...others} />);
}

export default Component;
