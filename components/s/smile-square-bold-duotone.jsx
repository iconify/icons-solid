import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/n/nyvfzccqy.css';
import '../../css/j/j8kuw0sgj.css';
import '../../css/v/vnbx2b2zx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="nyvfzccqy"/><path class="j8kuw0sgj"/><path class="vnbx2b2zx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smile-square-bold-duotone"} {...others} />);
}

export default Component;
