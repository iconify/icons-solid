import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-yxi3umn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-yxi3umn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-down-from-line"} {...others} />);
}

export default Component;
