import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu186ptsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lu186ptsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:question-mark"} {...others} />);
}

export default Component;
