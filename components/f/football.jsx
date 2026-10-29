import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl5uzhbhz.css';
import '../../css/z/zek168lls.css';
import '../../css/y/yge2317oz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl5uzhbhz wm-a"/><path class="wm-a zek168lls"/><path class="wm-k yge2317oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:football"} {...others} />);
}

export default Component;
