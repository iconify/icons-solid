import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce6gxvdaa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ce6gxvdaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:argon-theme-light"} {...others} />);
}

export default Component;
