import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-xcb-l_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-xcb-l_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-tv-and-phone"} {...others} />);
}

export default Component;
