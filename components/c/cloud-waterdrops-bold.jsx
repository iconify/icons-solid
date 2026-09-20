import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okf8tccvc.css';
import '../../css/x/x_5q0gb2d.css';
import '../../css/r/r9nn52mes.css';
import '../../css/p/plnjzdbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="okf8tccvc"/><path class="x_5q0gb2d"/><path class="r9nn52mes"/><path class="plnjzdbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-waterdrops-bold"} {...others} />);
}

export default Component;
