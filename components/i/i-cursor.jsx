import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wufx3cn9z.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="wufx3cn9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:i-cursor"} {...others} />);
}

export default Component;
