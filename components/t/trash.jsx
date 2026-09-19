import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrrtwolxr.css';
import '../../css/n/nsqn1rzpd.css';
import '../../css/m/mdjkfeg-d.css';
import '../../css/z/zbnzy9bch.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="hrrtwolxr"/><path transform="matrix(96.7529 0 0 87.18526 55.328 -89814.987)" class="nsqn1rzpd"/><path class="mdjkfeg-d"/><path class="zbnzy9bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:trash"} {...others} />);
}

export default Component;
