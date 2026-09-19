import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyv1xibtc.css';
import '../../css/t/tzkg51bww.css';
import '../../css/v/vur1unwrn.css';
import '../../css/i/irl_dzb7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gyv1xibtc"/><path class="tzkg51bww"/><path class="vur1unwrn"/><path class="irl_dzb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:frenchfries"} {...others} />);
}

export default Component;
