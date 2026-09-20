import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvhgkeuyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvhgkeuyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:accessibility"} {...others} />);
}

export default Component;
