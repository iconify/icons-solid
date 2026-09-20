import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie8p9lh6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ie8p9lh6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:photo-camera-cancelled"} {...others} />);
}

export default Component;
