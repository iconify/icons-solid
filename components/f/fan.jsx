import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hechexb5k.css';
import '../../css/d/d9qlonjqi.css';
import '../../css/q/q30nxhktm.css';
import '../../css/g/g1485z4ec.css';
import '../../css/a/a0t2xvbli.css';
import '../../css/q/qd8rybbhx.css';
import '../../css/z/zir_bu77j.css';
import '../../css/s/si-erccqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hechexb5k wm-shadow"/><path class="d9qlonjqi wm-k"/><path class="q30nxhktm wm-k"/><path class="g1485z4ec wm-k"/><path class="a0t2xvbli wm-k"/><path class="qd8rybbhx wm-k"/><path class="wm-k zir_bu77j"/><path class="si-erccqt wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:fan"} {...others} />);
}

export default Component;
