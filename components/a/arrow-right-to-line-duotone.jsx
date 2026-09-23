import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls4o5rx5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ls4o5rx5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-right-to-line-duotone"} {...others} />);
}

export default Component;
