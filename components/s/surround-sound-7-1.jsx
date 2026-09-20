import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzu4d0kby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yzu4d0kby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:surround-sound-7-1"} {...others} />);
}

export default Component;
