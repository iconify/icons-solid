import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onb2t3bho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onb2t3bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:attachment-2"} {...others} />);
}

export default Component;
