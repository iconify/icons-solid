import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdh5gcb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdh5gcb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:arrow-left-down-box-line"} {...others} />);
}

export default Component;
