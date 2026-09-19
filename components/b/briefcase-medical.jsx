import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scum1rbwe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="scum1rbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:briefcase-medical"} {...others} />);
}

export default Component;
