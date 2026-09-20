import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev_6lhbzt.css';
import '../../css/g/g0ooo8bxb.css';
import '../../css/b/b69_cg5od.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ev_6lhbzt"/><path class="g0ooo8bxb"/><path class="b69_cg5od"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fuel-bold-duotone"} {...others} />);
}

export default Component;
