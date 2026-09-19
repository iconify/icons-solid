import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-wl_ebkk.css';
import '../../css/e/evcz0ub6l.css';
import '../../css/f/f0d7r7b-w.css';
import '../../css/h/hz7rcr3is.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y-wl_ebkk"/><path class="evcz0ub6l"/><path class="f0d7r7b-w"/><path class="hz7rcr3is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tiger"} {...others} />);
}

export default Component;
