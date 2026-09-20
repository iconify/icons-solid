import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-d7b5o7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-d7b5o7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:webcam-solid"} {...others} />);
}

export default Component;
