import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkvak3bev.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="jkvak3bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:voicemail"} {...others} />);
}

export default Component;
