import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv4rrqlkh.css';
import '../../css/h/h68a5vtzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fv4rrqlkh"/><circle class="h68a5vtzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-notification-off"} {...others} />);
}

export default Component;
