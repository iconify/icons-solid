import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/j/j0x7yjd6h.css';
import '../../css/u/un7ztky7q.css';
import '../../css/r/rpzx_aboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="j0x7yjd6h"/><path class="un7ztky7q"/><path class="rpzx_aboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:expressionless-square-bold-duotone"} {...others} />);
}

export default Component;
