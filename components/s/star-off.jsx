import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1a27zb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1a27zb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:star-off"} {...others} />);
}

export default Component;
