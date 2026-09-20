import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh-bxob0v.css';
import '../../css/o/or6tflh7g.css';
import '../../css/w/wt5q0gb-i.css';
import '../../css/i/i-zynpbbb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jh-bxob0v"/><path class="or6tflh7g"/><path class="wt5q0gb-i"/><path class="i-zynpbbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:byparr"} {...others} />);
}

export default Component;
