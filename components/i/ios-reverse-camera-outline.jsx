import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2n_4vblw.css';
import '../../css/p/psnhj8bls.css';
import '../../css/c/cauo7_gzb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s2n_4vblw"/><path class="psnhj8bls"/><path class="cauo7_gzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-reverse-camera-outline"} {...others} />);
}

export default Component;
