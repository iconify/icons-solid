import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb0r06b6e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fb0r06b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:step-forward"} {...others} />);
}

export default Component;
