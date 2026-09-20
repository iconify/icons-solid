import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn2_-vbge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vn2_-vbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chart-no-axes-column-increasing-solid"} {...others} />);
}

export default Component;
