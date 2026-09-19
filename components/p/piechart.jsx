import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_71t2bfr.css';
import '../../css/w/wm1wz458c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="l_71t2bfr"/><path class="wm1wz458c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:piechart"} {...others} />);
}

export default Component;
