import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or-3v0bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or-3v0bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bitcoin"} {...others} />);
}

export default Component;
