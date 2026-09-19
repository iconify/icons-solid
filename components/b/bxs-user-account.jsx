import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsg-6dv6p.css';
import '../../css/q/quljz8buu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsg-6dv6p"/><path class="quljz8buu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-user-account"} {...others} />);
}

export default Component;
