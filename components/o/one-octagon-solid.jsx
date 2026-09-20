import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc7erx8nu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cc7erx8nu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:one-octagon-solid"} {...others} />);
}

export default Component;
