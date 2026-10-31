import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fee3yq8ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fee3yq8ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-close-corner-round"} {...others} />);
}

export default Component;
