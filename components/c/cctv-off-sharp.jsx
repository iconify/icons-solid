import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt6y7e71h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt6y7e71h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cctv-off-sharp"} {...others} />);
}

export default Component;
