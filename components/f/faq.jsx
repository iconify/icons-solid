import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx2bwzbqr.css';
import '../../css/c/c3o_ezbrt.css';
import '../../css/h/h70urzc4n.css';
import '../../css/l/lk8u_z3zu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qx2bwzbqr"/><path class="c3o_ezbrt"/><path class="h70urzc4n"/><path class="lk8u_z3zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:faq"} {...others} />);
}

export default Component;
