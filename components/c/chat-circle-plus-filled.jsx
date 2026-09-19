import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmqdbd-6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmqdbd-6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chat-circle-plus-filled"} {...others} />);
}

export default Component;
