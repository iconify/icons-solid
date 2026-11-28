import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk43z12xx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary xk43z12xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-big-left-duotone"} {...others} />);
}

export default Component;
