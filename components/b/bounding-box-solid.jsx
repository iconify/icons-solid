import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by2b1m5vu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by2b1m5vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:bounding-box-solid"} {...others} />);
}

export default Component;
