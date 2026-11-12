import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0miq4bvi.css';
import '../../css/e/ea99v4bya.css';
import '../../css/m/miq2hqbpn.css';
import '../../css/z/zbswdgb5v.css';
import '../../css/b/b91jejbdl.css';
import '../../css/c/c7-l0cc4n.css';
import '../../css/r/riu8qgbwb.css';
import '../../css/w/w48m5aiit.css';
import '../../css/k/kdc4d0b1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0miq4bvi"/><path class="ea99v4bya"/><path class="miq2hqbpn"/><path class="zbswdgb5v"/><path class="b91jejbdl"/><path class="c7-l0cc4n"/><path class="riu8qgbwb"/><path class="w48m5aiit"/><path class="kdc4d0b1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulseweaver-light"} {...others} />);
}

export default Component;
