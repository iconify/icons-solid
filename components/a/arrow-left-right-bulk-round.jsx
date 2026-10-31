import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_tz6bhzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_tz6bhzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-left-right-bulk-round"} {...others} />);
}

export default Component;
