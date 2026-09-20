import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/u/ug2_715qx.css';
import '../../css/a/aly-t-7bl.css';
import '../../css/q/qxr8_ybny.css';
import '../../css/k/k0qj-0b5m.css';
import '../../css/m/mto5cd9px.css';
import '../../css/p/pk4f3q2-m.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="ug2_715qx"/><path class="aly-t-7bl"/><path class="qxr8_ybny"/><path class="k0qj-0b5m"/><path class="mto5cd9px"/><path class="pk4f3q2-m"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-wallis-and-futuna"} {...others} />);
}

export default Component;
