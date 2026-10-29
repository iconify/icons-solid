import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u1wanmiwb.css';
import '../../css/w/wr7_9j2ie.css';
import '../../css/g/g7nk-s9us.css';
import '../../css/o/ojvzaxljq.css';
import '../../css/p/p-xrl3bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u1wanmiwb"/><path class="wm-k wr7_9j2ie"/><path class="g7nk-s9us wm-a"/><path class="ojvzaxljq wm-k"/><path class="p-xrl3bvq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-plus-sketch"} {...others} />);
}

export default Component;
