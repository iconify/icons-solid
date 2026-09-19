import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn4ka_0ey.css';

const viewBox = {"width":352,"height":512};
const content = `<path class="yn4ka_0ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:microphone"} {...others} />);
}

export default Component;
