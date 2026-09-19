import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd7i3ibcm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gd7i3ibcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:window-close"} {...others} />);
}

export default Component;
