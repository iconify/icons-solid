import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j4vod4mvj.css';
import '../../css/x/x83o3-c1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j4vod4mvj"/><path clip-rule="evenodd" class="x83o3-c1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drumstick"} {...others} />);
}

export default Component;
