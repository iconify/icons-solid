import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfniv6mla.css';
import '../../css/r/rl-6rnbqs.css';
import '../../css/g/gf-bxrb8a.css';
import '../../css/m/mu4n766oh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mfniv6mla"/><path class="rl-6rnbqs"/><path class="gf-bxrb8a"/><circle class="mu4n766oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-camera-outline"} {...others} />);
}

export default Component;
