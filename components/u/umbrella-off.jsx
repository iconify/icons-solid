import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yt165s4ke.css';
import '../../css/b/bw5gewb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yt165s4ke"/><path class="bw5gewb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:umbrella-off"} {...others} />);
}

export default Component;
