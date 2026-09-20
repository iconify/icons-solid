import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9d3uccox.css';
import '../../css/p/puhvhwbqm.css';
import '../../css/b/b7mizhbcw.css';
import '../../css/t/taik3bt6h.css';
import '../../css/s/s8btyqw_a.css';
import '../../css/k/k_3ddbc7t.css';
import '../../css/c/c-80w6bzc.css';
import '../../css/d/dh7dspsmr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z9d3uccox"/><path class="puhvhwbqm"/><path class="b7mizhbcw"/><path class="taik3bt6h"/><path class="s8btyqw_a"/><circle class="k_3ddbc7t"/><circle class="c-80w6bzc"/><circle class="dh7dspsmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:t-shirt"} {...others} />);
}

export default Component;
