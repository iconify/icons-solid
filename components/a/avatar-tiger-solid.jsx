import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo_2k_dtv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vo_2k_dtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-tiger-solid"} {...others} />);
}

export default Component;
