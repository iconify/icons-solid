import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfl7fxybz.css';
import '../../css/u/ur154rbom.css';
import '../../css/w/wsnaudczl.css';
import '../../css/n/ns55fvgze.css';
import '../../css/p/pidhzkbvr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 rfl7fxybz"/><path class="clr-i-outline clr-i-outline-path-2 ur154rbom"/><path class="clr-i-outline clr-i-outline-path-3 wsnaudczl"/><path class="clr-i-outline clr-i-outline-path-4 ns55fvgze"/><path class="clr-i-outline clr-i-outline-path-5 pidhzkbvr"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:certificate-line"} {...others} />);
}

export default Component;
