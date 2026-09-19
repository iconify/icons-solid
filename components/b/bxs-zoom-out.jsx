import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp9rkhbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vp9rkhbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-zoom-out"} {...others} />);
}

export default Component;
