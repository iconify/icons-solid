import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urd7awfvu.css';
import '../../css/t/tyjba4b7k.css';
import '../../css/x/xt80u9-4p.css';
import '../../css/q/qr22n-b8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="urd7awfvu"/><path class="tyjba4b7k"/><path class="xt80u9-4p"/><path class="qr22n-b8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-split-bold"} {...others} />);
}

export default Component;
