import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srjvx7b4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="srjvx7b4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hand-scissors"} {...others} />);
}

export default Component;
