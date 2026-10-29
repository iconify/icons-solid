import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s24ketb5h.css';
import '../../css/g/g69iphyoi.css';
import '../../css/m/m150h8tzr.css';
import '../../css/h/hs2mcfxmr.css';
import '../../css/b/b115-hbnu.css';
import '../../css/m/m83ig5hop.css';
import '../../css/g/gfo3g8bdq.css';
import '../../css/b/bckffibel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s24ketb5h wm-shadow"/><path class="g69iphyoi wm-k"/><path class="m150h8tzr wm-k"/><path class="hs2mcfxmr wm-k"/><path class="b115-hbnu wm-k"/><path class="m83ig5hop wm-k"/><path class="gfo3g8bdq wm-shine"/><path class="bckffibel wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:badge-x"} {...others} />);
}

export default Component;
