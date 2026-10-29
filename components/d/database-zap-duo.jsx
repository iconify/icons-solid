import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pm9m58bqs.css';
import '../../css/l/lwyoupl0p.css';
import '../../css/j/jljbt0bgl.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i83y3y1nc.css';
import '../../css/x/xfthtjbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pm9m58bqs"/><path class="lwyoupl0p wm-s"/><path class="jljbt0bgl wm-s"/><path class="y95393_dl"/><path class="i83y3y1nc"/><path class="wm-a xfthtjbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-zap-duo"} {...others} />);
}

export default Component;
