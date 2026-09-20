import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt-2qd5ac.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gt-2qd5ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:audio-description1"} {...others} />);
}

export default Component;
