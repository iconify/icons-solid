import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzhf6mbgl.css';
import '../../css/d/d72ifg1in.css';
import '../../css/k/ko92zebxf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzhf6mbgl"/><path class="d72ifg1in"/><path class="ko92zebxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ear-outline"} {...others} />);
}

export default Component;
