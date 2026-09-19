import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/v/v0l2el8mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><path class="v0l2el8mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-dollar-circle"} {...others} />);
}

export default Component;
