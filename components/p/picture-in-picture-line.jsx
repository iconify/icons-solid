import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_o_u3b0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_o_u3b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:picture-in-picture-line"} {...others} />);
}

export default Component;
