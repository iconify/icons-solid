import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g86p7cczn.css';
import '../../css/e/eb847rttw.css';
import '../../css/d/d28pnkcvk.css';
import '../../css/h/hhonhdeix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g86p7cczn"/><path class="eb847rttw"/><path class="d28pnkcvk"/><path class="hhonhdeix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:roastedsweetpotato"} {...others} />);
}

export default Component;
