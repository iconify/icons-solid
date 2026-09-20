import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koj4gublb.css';
import '../../css/o/ofw11lk8d.css';
import '../../css/y/y6rebfbtb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="koj4gublb"/><path class="ofw11lk8d"/><path class="y6rebfbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:password-pusher"} {...others} />);
}

export default Component;
