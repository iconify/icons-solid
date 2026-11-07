import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2_p_-b2x.css';
import '../../css/p/po4rq5n8r.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/ns_onqv1v.css';
import '../../css/g/g-px437dg.css';
import '../../css/j/j0v4cub4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2_p_-b2x"/><path class="po4rq5n8r"/><g class="xtpeb-edw"><path class="ns_onqv1v"/><path class="g-px437dg"/><path class="j0v4cub4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-bold-duotone"} {...others} />);
}

export default Component;
