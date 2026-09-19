import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie_pn6uis.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="ie_pn6uis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:rocketchat"} {...others} />);
}

export default Component;
