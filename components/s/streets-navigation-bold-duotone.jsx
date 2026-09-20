import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zntbuyb6q.css';
import '../../css/c/cexkt5-kt.css';
import '../../css/d/de7w1bc6s.css';
import '../../css/q/qe-5uc0sl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zntbuyb6q"/><path class="cexkt5-kt"/><path class="de7w1bc6s"/><path class="qe-5uc0sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-bold-duotone"} {...others} />);
}

export default Component;
