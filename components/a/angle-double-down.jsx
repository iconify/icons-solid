import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa8fp8b1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa8fp8b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:angle-double-down"} {...others} />);
}

export default Component;
