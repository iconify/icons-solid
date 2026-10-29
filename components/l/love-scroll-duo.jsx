import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pc_owj88e.css';
import '../../css/h/huhv39n0m.css';
import '../../css/d/d3l-qbctv.css';
import '../../css/i/iyhzocb_q.css';
import '../../css/o/ott85pgeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pc_owj88e"/><path class="huhv39n0m wm-s"/><path class="d3l-qbctv wm-s"/><path class="iyhzocb_q"/><path class="ott85pgeh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-scroll-duo"} {...others} />);
}

export default Component;
