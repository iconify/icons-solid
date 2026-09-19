import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5rcylbor.css';
import '../../css/f/fgbxazb5o.css';
import '../../css/a/auqu-obrz.css';
import '../../css/x/x-c9u4b1g.css';
import '../../css/v/v0iev5bej.css';
import '../../css/u/uywnxnbmz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 l5rcylbor"/><path class="clr-i-outline clr-i-outline-path-2 fgbxazb5o"/><path class="auqu-obrz clr-i-outline clr-i-outline-path-3"/><path class="clr-i-outline clr-i-outline-path-4 x-c9u4b1g"/><path class="clr-i-outline clr-i-outline-path-5 v0iev5bej"/><path class="clr-i-outline clr-i-outline-path-6 uywnxnbmz"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cd-dvd-line"} {...others} />);
}

export default Component;
