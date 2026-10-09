import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k41w8nb5d.css';
import '../../css/q/qa6864b4v.css';
import '../../css/v/vpl7jxb5u.css';
import '../../css/b/bpj_o18oq.css';
import '../../css/i/izhkpi9bc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k41w8nb5d"/><path class="qa6864b4v"/><path class="vpl7jxb5u"/><path class="bpj_o18oq"/><path class="izhkpi9bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-swap-48-bold"} {...others} />);
}

export default Component;
