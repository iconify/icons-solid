import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dy3uwwbtb.css';
import '../../css/h/h-_3jubfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dy3uwwbtb"/><path class="h-_3jubfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:discord"} {...others} />);
}

export default Component;
