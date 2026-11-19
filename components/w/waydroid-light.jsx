import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noywb7vvo.css';
import '../../css/o/obfu5obql.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="noywb7vvo"/><path class="obfu5obql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:waydroid-light"} {...others} />);
}

export default Component;
