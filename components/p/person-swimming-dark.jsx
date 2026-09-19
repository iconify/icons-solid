import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x47far9tc.css';
import '../../css/m/m5h5b3kyt.css';
import '../../css/p/pqv40kbjs.css';
import '../../css/n/n4q_ssx8d.css';
import '../../css/l/ltrwdacjq.css';
import '../../css/v/v0n07lbqc.css';
import '../../css/n/n9-d90b7g.css';
import '../../css/a/ak5poiz3j.css';
import '../../css/i/iog9v5dex.css';
import '../../css/j/japiswq9y.css';
import '../../css/l/lnay3-bsk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x47far9tc"/><path class="m5h5b3kyt"/><path class="pqv40kbjs"/><path class="n4q_ssx8d"/><path class="ltrwdacjq"/><path class="v0n07lbqc"/><path class="n9-d90b7g"/><path class="ak5poiz3j"/><path class="iog9v5dex"/><path class="japiswq9y"/><path class="lnay3-bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-swimming-dark"} {...others} />);
}

export default Component;
