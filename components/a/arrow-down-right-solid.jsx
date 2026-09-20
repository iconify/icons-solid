import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gilks3ujm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gilks3ujm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-down-right-solid"} {...others} />);
}

export default Component;
