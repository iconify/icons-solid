import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg5z9hj3r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gg5z9hj3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:chart-area"} {...others} />);
}

export default Component;
