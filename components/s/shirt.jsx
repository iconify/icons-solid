import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt6snqu5h.css';
import '../../css/f/f5ppuo7gp.css';
import '../../css/m/mc3zo1mlr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mt6snqu5h"/><path class="f5ppuo7gp"/><path class="mc3zo1mlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:shirt"} {...others} />);
}

export default Component;
