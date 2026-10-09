import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmdh2rbtc.css';
import '../../css/e/eo-i-43lt.css';
import '../../css/u/ufuoplbno.css';
import '../../css/c/c_pwfbcxb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zmdh2rbtc"/><path class="eo-i-43lt"/><path class="ufuoplbno"/><path class="c_pwfbcxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yurt-48"} {...others} />);
}

export default Component;
