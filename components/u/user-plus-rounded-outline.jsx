import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc8l53b6q.css';
import '../../css/y/y0wtcrqbx.css';
import '../../css/x/x0r9zqw6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mc8l53b6q"/><path class="y0wtcrqbx"/><path clip-rule="evenodd" class="x0r9zqw6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-plus-rounded-outline"} {...others} />);
}

export default Component;
