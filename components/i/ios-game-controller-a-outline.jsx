import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwqo1vzck.css';
import '../../css/v/v-lkf8-lr.css';
import '../../css/n/nkzy3-8yt.css';
import '../../css/h/h37eucblg.css';
import '../../css/g/gnsmh12yv.css';
import '../../css/r/ruec2877h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kwqo1vzck"/><path class="v-lkf8-lr"/><path class="nkzy3-8yt"/><path class="h37eucblg"/><path class="gnsmh12yv"/><path class="ruec2877h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-game-controller-a-outline"} {...others} />);
}

export default Component;
