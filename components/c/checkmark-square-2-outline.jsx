import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7s6tsbkb.css';
import '../../css/i/ik4wy9jol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7s6tsbkb"/><path class="ik4wy9jol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:checkmark-square-2-outline"} {...others} />);
}

export default Component;
