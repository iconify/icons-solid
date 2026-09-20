import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0z04lmhk.css';
import '../../css/n/np24xwb0n.css';
import '../../css/u/upk2z-g3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g0z04lmhk"/><path class="np24xwb0n"/><path class="upk2z-g3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:repeat"} {...others} />);
}

export default Component;
