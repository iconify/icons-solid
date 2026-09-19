import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-u__gbwn.css';
import '../../css/i/ipbc4vbmv.css';
import '../../css/c/c19rfsb2z.css';
import '../../css/f/f3if6-vqm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-u__gbwn"/><path class="ipbc4vbmv"/><path class="c19rfsb2z"/><path class="f3if6-vqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-rose-outline"} {...others} />);
}

export default Component;
