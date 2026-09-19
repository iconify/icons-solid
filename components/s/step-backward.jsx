import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8v1zhb3e.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="g8v1zhb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:step-backward"} {...others} />);
}

export default Component;
