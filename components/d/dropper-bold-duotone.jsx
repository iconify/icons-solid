import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyw39yrbf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jqn9_xd9g.css';
import '../../css/l/lrmsywbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zyw39yrbf"/><g class="mc2zb0bvp"><path class="jqn9_xd9g"/><path class="lrmsywbjb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-bold-duotone"} {...others} />);
}

export default Component;
