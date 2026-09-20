import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kseo5h_hk.css';
import '../../css/o/om_72wbep.css';
import '../../css/s/stvu30brs.css';
import '../../css/u/um748xbad.css';
import '../../css/l/l7tzl4-5w.css';
import '../../css/z/ztlf9yb4r.css';
import '../../css/s/sbx4rtt3p.css';
import '../../css/a/a8uu84-il.css';
import '../../css/f/f9bhsibsk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kseo5h_hk"/><path class="om_72wbep"/><path class="stvu30brs"/><path class="um748xbad"/><path class="l7tzl4-5w"/><path class="ztlf9yb4r"/><path class="sbx4rtt3p"/><path class="a8uu84-il"/><path class="f9bhsibsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:group-meeting-approval"} {...others} />);
}

export default Component;
