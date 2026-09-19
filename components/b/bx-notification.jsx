import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h68a5vtzz.css';
import '../../css/d/dfyzz_bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="h68a5vtzz"/><path class="dfyzz_bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-notification"} {...others} />);
}

export default Component;
