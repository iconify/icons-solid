import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d145pkbyl.css';
import '../../css/u/u1jtw-d9c.css';
import '../../css/e/ejksmvbap.css';
import '../../css/s/shvrguwxi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d145pkbyl"/><path class="u1jtw-d9c"/><path class="ejksmvbap"/><path class="shvrguwxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-qr-scanner"} {...others} />);
}

export default Component;
