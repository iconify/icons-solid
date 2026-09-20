import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kot2fy1te.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kot2fy1te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:flower-2-solid"} {...others} />);
}

export default Component;
