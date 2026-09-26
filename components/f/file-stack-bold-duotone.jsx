import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x0c9_4bxl.css';
import '../../css/n/nh1xv36ao.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f09_mkvvu.css';
import '../../css/k/kv93igb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x0c9_4bxl"/><path class="nh1xv36ao"/><g class="mc2zb0bvp"><path class="f09_mkvvu"/><path class="kv93igb5n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-stack-bold-duotone"} {...others} />);
}

export default Component;
