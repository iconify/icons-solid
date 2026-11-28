import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkkt6hb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary vkkt6hb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:parentheses-ellipsis-duotone"} {...others} />);
}

export default Component;
