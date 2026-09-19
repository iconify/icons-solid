import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3j4zebqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3j4zebqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:corner-up-left-fill"} {...others} />);
}

export default Component;
