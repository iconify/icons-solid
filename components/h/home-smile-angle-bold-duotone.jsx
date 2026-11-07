import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swf6libns.css';
import '../../css/n/nosnhobdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swf6libns"/><path class="nosnhobdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-smile-angle-bold-duotone"} {...others} />);
}

export default Component;
