import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1i0wvbdv.css';
import '../../css/r/r8amylauc.css';
import '../../css/v/vq15xpb4s.css';
import '../../css/v/vwazgn8zx.css';
import '../../css/j/juytcbcuo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ermbv6b9l.css';
import '../../css/s/sats95d6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1i0wvbdv"/><path class="r8amylauc"/><path class="vq15xpb4s"/><path class="vwazgn8zx"/><path class="juytcbcuo"/><g class="xtpeb-edw"><path class="ermbv6b9l"/><path class="sats95d6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-on-bold-duotone"} {...others} />);
}

export default Component;
