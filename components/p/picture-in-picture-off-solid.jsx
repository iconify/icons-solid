import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2m7iubdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2m7iubdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:picture-in-picture-off-solid"} {...others} />);
}

export default Component;
