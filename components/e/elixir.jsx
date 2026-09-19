import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1j4pw88e.css';
import '../../css/v/vchls_btl.css';
import '../../css/e/ejfm2-94j.css';
import '../../css/t/t9egpnbaz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="y1j4pw88e"/><path class="vchls_btl"/><path class="ejfm2-94j"/><path class="t9egpnbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:elixir"} {...others} />);
}

export default Component;
