import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykcfmhbut.css';
import '../../css/n/ndw-drpzj.css';
import '../../css/f/fqg8o48cr.css';
import '../../css/o/omxg8shex.css';
import '../../css/x/xf88j6r_y.css';
import '../../css/h/hc4ci2g1m.css';
import '../../css/l/ldsb3mbrk.css';
import '../../css/g/gj40lqb8p.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ykcfmhbut"/><path class="clr-i-outline clr-i-outline-path-2 ndw-drpzj"/><path class="clr-i-outline clr-i-outline-path-3 fqg8o48cr"/><path class="clr-i-outline clr-i-outline-path-4 omxg8shex"/><path class="clr-i-outline clr-i-outline-path-5 xf88j6r_y"/><path class="clr-i-outline clr-i-outline-path-6 hc4ci2g1m"/><path class="clr-i-outline clr-i-outline-path-7 ldsb3mbrk"/><path class="clr-i-outline clr-i-outline-path-8 gj40lqb8p"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:view-list-line"} {...others} />);
}

export default Component;
