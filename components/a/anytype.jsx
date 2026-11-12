import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3odiub7g.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/i/its4rfm3m.css';
import '../../css/x/xxi-wcced.css';
import '../../css/z/z6fo3dbwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k3odiub7g"/><linearGradient id="SVG5y6YTbEp" x1="177.4" x2="325.5" y1="68.3" y2="437.2" gradientUnits="userSpaceOnUse"><stop offset=".5" class="vc--wpv5i"/><stop offset=".664" class="its4rfm3m"/><stop offset=".839" class="xxi-wcced"/></linearGradient><path fill="url(#SVG5y6YTbEp)" class="z6fo3dbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anytype"} {...others} />);
}

export default Component;
