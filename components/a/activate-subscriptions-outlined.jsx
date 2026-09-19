import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_b8-8a_m.css';
import '../../css/y/ydl-jxb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_b8-8a_m"/><path class="ydl-jxb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:activate-subscriptions-outlined"} {...others} />);
}

export default Component;
