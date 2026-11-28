import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h5-xafb4k.css';
import '../../css/o/o5m7x179e.css';
import '../../css/p/pys0c1-cx.css';
import '../../css/i/icq-r7o2s.css';
import '../../css/q/qudhafvrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h5-xafb4k"/><path class="o5m7x179e"/><path class="pys0c1-cx"/><path class="icq-r7o2s"/><path class="qudhafvrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-wrap-left"} {...others} />);
}

export default Component;
