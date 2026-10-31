import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1d4srxvg.css';
import '../../css/y/y04e-qe0r.css';
import '../../css/r/rnp76ybhy.css';
import '../../css/q/q3mochbor.css';
import '../../css/m/muw16iuut.css';
import '../../css/k/kyvc2jawv.css';
import '../../css/o/o0cl7ds7x.css';
import '../../css/k/k-cparbro.css';
import '../../css/p/p_upzsfwp.css';
import '../../css/e/ejvba9bdg.css';
import '../../css/b/bzr197h-t.css';

const viewBox = {"width":900,"height":600};
const content = `<g class="ft5dv1b6b"><path class="q1d4srxvg"/><path class="y04e-qe0r"/><path class="rnp76ybhy"/><path class="q3mochbor"/><path class="muw16iuut"/><path class="kyvc2jawv"/><path class="o0cl7ds7x"/><path class="k-cparbro"/><path class="p_upzsfwp"/><path class="ejvba9bdg"/><path class="bzr197h-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:hk"} {...others} />);
}

export default Component;
