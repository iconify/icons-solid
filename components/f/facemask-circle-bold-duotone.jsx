import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvhbsob1d.css';
import '../../css/k/k-271_ikx.css';
import '../../css/h/hcagz5v3k.css';
import '../../css/n/n2s0mwbnn.css';
import '../../css/c/ctpju6bji.css';
import '../../css/j/jjk_8ebes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvhbsob1d"/><path class="k-271_ikx"/><path class="hcagz5v3k"/><path class="n2s0mwbnn"/><path class="ctpju6bji"/><path class="jjk_8ebes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-circle-bold-duotone"} {...others} />);
}

export default Component;
