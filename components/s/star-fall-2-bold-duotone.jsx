import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uh6tm789e.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lvn50tezb.css';
import '../../css/y/yfbk6go2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uh6tm789e"/><g class="mc2zb0bvp"><path class="lvn50tezb"/><path class="yfbk6go2x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-2-bold-duotone"} {...others} />);
}

export default Component;
