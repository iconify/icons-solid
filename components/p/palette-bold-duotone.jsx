import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uq_u8vbon.css';
import '../../css/t/t1bviy9_z.css';
import '../../css/l/l7jzesbrd.css';
import '../../css/w/wx6uobcjh.css';
import '../../css/x/x9oj0mbfx.css';
import '../../css/s/sqq60zb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="uq_u8vbon"/><path class="t1bviy9_z"/></g><g class="mc2zb0bvp"><path class="l7jzesbrd"/><path class="wx6uobcjh"/></g><path class="x9oj0mbfx"/><path class="sqq60zb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-bold-duotone"} {...others} />);
}

export default Component;
