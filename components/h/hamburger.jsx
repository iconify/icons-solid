import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khgs00bjt.css';
import '../../css/n/ngyi29bdb.css';
import '../../css/r/rxyiwtdxn.css';
import '../../css/m/m1lbx02vh.css';
import '../../css/v/vlubo49by.css';
import '../../css/q/qy75zbb9g.css';
import '../../css/b/byj6-ca8o.css';
import '../../css/z/zd-igubsf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="khgs00bjt"/><path class="ngyi29bdb"/><ellipse class="rxyiwtdxn"/><ellipse class="m1lbx02vh"/><path class="vlubo49by"/><path class="qy75zbb9g"/><path class="byj6-ca8o"/><path class="zd-igubsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hamburger"} {...others} />);
}

export default Component;
