import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8p3_0btu.css';
import '../../css/l/lyhdl9b0f.css';
import '../../css/h/h7v2vtedr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x8p3_0btu"/><path class="lyhdl9b0f"/><path class="h7v2vtedr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ladle-bold-duotone"} {...others} />);
}

export default Component;
