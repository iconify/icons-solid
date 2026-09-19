import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur14avi_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ur14avi_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-telegram"} {...others} />);
}

export default Component;
