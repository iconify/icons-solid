import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfx4hwblx.css';
import '../../css/y/y_1jdug8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vfx4hwblx"/><path class="y_1jdug8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:list-xmark"} {...others} />);
}

export default Component;
