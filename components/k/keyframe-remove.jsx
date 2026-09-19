import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p01jabb-e.css';
import '../../css/h/hchwrjbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p01jabb-e"/><path class="hchwrjbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-remove"} {...others} />);
}

export default Component;
