import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc636cy2y.css';
import '../../css/k/k_z2hubvw.css';
import '../../css/c/czqzp-bby.css';
import '../../css/q/qm3ehwbxj.css';
import '../../css/g/gjbb3abqw.css';
import '../../css/e/ercfrbxiv.css';
import '../../css/u/u0n28bbtj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zc636cy2y"/><path class="k_z2hubvw"/><path class="czqzp-bby"/><path class="qm3ehwbxj"/><circle class="gjbb3abqw"/><circle class="ercfrbxiv"/><path class="u0n28bbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pager"} {...others} />);
}

export default Component;
