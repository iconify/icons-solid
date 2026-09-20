import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uay64kd_o.css';
import '../../css/h/h1bkggb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uay64kd_o"/><path clip-rule="evenodd" class="h1bkggb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:radio-solid-expressive"} {...others} />);
}

export default Component;
