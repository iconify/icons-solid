import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wqc26mdly.css';
import '../../css/x/xun4g8t8p.css';
import '../../css/a/ahfgyujxk.css';
import '../../css/u/uj0e0abff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="wqc26mdly"/><path class="xun4g8t8p"/></g><path class="ahfgyujxk"/><path class="uj0e0abff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-bold-duotone"} {...others} />);
}

export default Component;
