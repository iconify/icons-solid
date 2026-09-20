import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uo5h1db1c.css';
import '../../css/n/nrkc6qbqt.css';
import '../../css/p/pamn5g9ib.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="uo5h1db1c"/><path class="nrkc6qbqt"/><circle class="pamn5g9ib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-catergories-phone-android-phone-mobile-device-smartphone-iphone"} {...others} />);
}

export default Component;
