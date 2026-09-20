import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxt6l9bjr.css';
import '../../css/x/xq-y8uznm.css';
import '../../css/a/a6-yujbda.css';
import '../../css/q/qhft30boa.css';
import '../../css/f/f1-ub9tyt.css';
import '../../css/t/tbw1adbub.css';
import '../../css/e/edymxtb1e.css';
import '../../css/k/kllelvwqa.css';
import '../../css/u/u462n5-qx.css';
import '../../css/f/fn2nf_bmg.css';
import '../../css/a/ab4ryebhr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="dxt6l9bjr"/><path class="xq-y8uznm"/><path class="a6-yujbda"/><path class="qhft30boa"/><path class="f1-ub9tyt"/><path class="tbw1adbub"/><path class="edymxtb1e"/><path class="kllelvwqa"/><path class="u462n5-qx"/><path class="fn2nf_bmg"/><path class="ab4ryebhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:huginn"} {...others} />);
}

export default Component;
