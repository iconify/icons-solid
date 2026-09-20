import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcygzbb7m.css';
import '../../css/l/lvgl99b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xcygzbb7m"/><path class="lvgl99b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-square-sharp-duotone"} {...others} />);
}

export default Component;
