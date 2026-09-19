import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-9s02ozz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-9s02ozz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:face-rolling-eyes"} {...others} />);
}

export default Component;
