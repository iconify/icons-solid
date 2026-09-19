import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x47far9tc.css';
import '../../css/c/czjomqxfo.css';
import '../../css/p/pqv40kbjs.css';
import '../../css/k/koxptsbhs.css';
import '../../css/t/tz599cgpx.css';
import '../../css/w/wdw19_kcj.css';
import '../../css/e/ebxaavbhk.css';
import '../../css/k/k1cp6tumi.css';
import '../../css/i/iog9v5dex.css';
import '../../css/j/japiswq9y.css';
import '../../css/l/lnay3-bsk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x47far9tc"/><path class="czjomqxfo"/><path class="pqv40kbjs"/><path class="koxptsbhs"/><path class="tz599cgpx"/><path class="wdw19_kcj"/><path class="ebxaavbhk"/><path class="k1cp6tumi"/><path class="iog9v5dex"/><path class="japiswq9y"/><path class="lnay3-bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-swimming-medium"} {...others} />);
}

export default Component;
