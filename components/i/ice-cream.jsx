import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs-xbhv-s.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="qs-xbhv-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:ice-cream"} {...others} />);
}

export default Component;
