import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b75yygb-r.css';
import '../../css/i/iqu5xknni.css';
import '../../css/c/c5udlwswq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b75yygb-r"/><path class="iqu5xknni"/><path class="c5udlwswq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:square-3-stack-3d-solid"} {...others} />);
}

export default Component;
