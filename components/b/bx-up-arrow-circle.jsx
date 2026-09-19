import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twgo94b6k.css';
import '../../css/b/bc0bc3bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="twgo94b6k"/><path class="bc0bc3bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-up-arrow-circle"} {...others} />);
}

export default Component;
