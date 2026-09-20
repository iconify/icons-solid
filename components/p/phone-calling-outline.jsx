import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zovzpjbnp.css';
import '../../css/z/zrk0uqbtm.css';
import '../../css/p/py4tdmbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zovzpjbnp"/><path class="zrk0uqbtm"/><path class="py4tdmbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-outline"} {...others} />);
}

export default Component;
