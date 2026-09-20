import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/v/v9kznfl-s.css';
import '../../css/u/un7ztky7q.css';
import '../../css/r/rpzx_aboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="v9kznfl-s"/><path class="un7ztky7q"/><path class="rpzx_aboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:expressionless-circle-bold-duotone"} {...others} />);
}

export default Component;
