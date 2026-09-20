import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylsm6d0zn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ylsm6d0zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chat-line"} {...others} />);
}

export default Component;
