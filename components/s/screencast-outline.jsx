import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t49pxwgna.css';
import '../../css/d/dc-k-0ubs.css';
import '../../css/g/g32qo-u5u.css';
import '../../css/g/gdw6uxb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t49pxwgna"/><path class="dc-k-0ubs"/><path class="g32qo-u5u"/><path class="gdw6uxb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-outline"} {...others} />);
}

export default Component;
