import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh1_5c8zi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vh1_5c8zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:volume-down-line"} {...others} />);
}

export default Component;
