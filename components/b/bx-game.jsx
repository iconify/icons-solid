import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg0h8xb-u.css';
import '../../css/c/c0keyp4fy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eg0h8xb-u"/><circle class="c0keyp4fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-game"} {...others} />);
}

export default Component;
