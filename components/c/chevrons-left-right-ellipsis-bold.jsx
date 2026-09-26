import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xm8h3ub8g.css';
import '../../css/n/ntvg8ebwg.css';
import '../../css/s/s16hu4bqq.css';
import '../../css/f/f3zftobmw.css';
import '../../css/e/ejcm2pblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xm8h3ub8g"/><path class="ntvg8ebwg"/><path class="s16hu4bqq"/><path class="f3zftobmw"/><path class="ejcm2pblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-ellipsis-bold"} {...others} />);
}

export default Component;
