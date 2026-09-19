import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/i/ik4wy9jol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><path class="ik4wy9jol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:checkmark-circle-2-outline"} {...others} />);
}

export default Component;
