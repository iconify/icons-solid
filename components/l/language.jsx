import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhx9qgb1y.css';
import '../../css/q/q_azv0b7e.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="dhx9qgb1y"/><path clip-rule="evenodd" class="q_azv0b7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:language"} {...others} />);
}

export default Component;
