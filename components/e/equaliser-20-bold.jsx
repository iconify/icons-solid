import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n82hfedjk.css';
import '../../css/m/mykdzoydx.css';
import '../../css/x/xab2q609a.css';
import '../../css/q/qoor38bos.css';
import '../../css/k/kb1xt2soy.css';
import '../../css/x/xnymlibdn.css';
import '../../css/e/e4eb1_gub.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n82hfedjk"/><path class="mykdzoydx"/><path class="xab2q609a"/><path class="qoor38bos"/><path class="kb1xt2soy"/><path class="xnymlibdn"/><path class="e4eb1_gub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:equaliser-20-bold"} {...others} />);
}

export default Component;
