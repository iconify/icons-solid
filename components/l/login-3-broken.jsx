import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/so2izg5eh.css';
import '../../css/v/v0-ucqeuw.css';
import '../../css/j/jsl6qobau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="so2izg5eh"/><path class="v0-ucqeuw"/><path class="jsl6qobau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-3-broken"} {...others} />);
}

export default Component;
