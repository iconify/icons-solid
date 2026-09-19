import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc_d--bcm.css';
import '../../css/l/lmcg74bhh.css';
import '../../css/t/t12n55-xl.css';
import '../../css/r/rt044bc1h.css';
import '../../css/b/b_vlnrdwt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qc_d--bcm"/><path class="lmcg74bhh"/><path class="t12n55-xl"/><path class="rt044bc1h"/><path class="b_vlnrdwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mouse"} {...others} />);
}

export default Component;
