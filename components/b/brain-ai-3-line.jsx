import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knlvkn1xk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knlvkn1xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:brain-ai-3-line"} {...others} />);
}

export default Component;
