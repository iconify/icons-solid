import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2h2y-e_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2h2y-e_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:door-lock-fill"} {...others} />);
}

export default Component;
