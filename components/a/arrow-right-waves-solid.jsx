import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iadd8ybpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iadd8ybpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-right-waves-solid"} {...others} />);
}

export default Component;
