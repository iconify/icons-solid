import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cahgih0ph.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cahgih0ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:users-filled"} {...others} />);
}

export default Component;
