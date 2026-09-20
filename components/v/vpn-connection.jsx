import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rwaw8u2-n.css';
import '../../css/f/fp0m1ixok.css';
import '../../css/x/xjm124h0g.css';
import '../../css/b/bwv6xw4xn.css';
import '../../css/a/a_4nnkb7h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rwaw8u2-n"/><path class="fp0m1ixok"/><path class="xjm124h0g"/><path class="bwv6xw4xn"/><path class="a_4nnkb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:vpn-connection"} {...others} />);
}

export default Component;
