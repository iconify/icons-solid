import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/q/qt1tusboa.css';
import '../../css/m/m3x86_3zn.css';
import '../../css/v/vzi9avbag.css';
import '../../css/t/tjivv3bqi.css';
import '../../css/x/xnqrr2gqq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="qt1tusboa"/><path class="m3x86_3zn"/><path class="vzi9avbag"/><path class="tjivv3bqi"/><path class="xnqrr2gqq"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-zambia"} {...others} />);
}

export default Component;
