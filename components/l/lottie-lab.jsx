import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k25y2fb7n.css';
import '../../css/w/w0h6xabmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b k25y2fb7n"/><path class="b w0h6xabmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:lottie-lab"} {...others} />);
}

export default Component;
