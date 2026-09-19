import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_-o5gbjb.css';
import '../../css/j/jmv2nctrq.css';
import '../../css/n/nbsqfsbss.css';
import '../../css/t/th877hbin.css';
import '../../css/c/cuhch3blf.css';
import '../../css/a/afte5rb2f.css';
import '../../css/b/bn_lakb0o.css';
import '../../css/o/o4h38cc-t.css';
import '../../css/d/di6tifb5o.css';
import '../../css/p/paply3bzl.css';
import '../../css/r/rf1m7fbsq.css';
import '../../css/e/ebzzsyckw.css';
import '../../css/w/wg1yulb9b.css';
import '../../css/n/nm0b5_b_z.css';
import '../../css/r/rdlpihbqm.css';
import '../../css/e/ep-b-cb7b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q_-o5gbjb"/><path class="jmv2nctrq"/><path class="nbsqfsbss"/><path class="th877hbin"/><path class="cuhch3blf"/><path class="afte5rb2f"/><path class="bn_lakb0o"/><path class="o4h38cc-t"/><path class="di6tifb5o"/><path class="paply3bzl"/><path class="rf1m7fbsq"/><path class="ebzzsyckw"/><path class="wg1yulb9b"/><path class="nm0b5_b_z"/><path class="rdlpihbqm"/><path class="ep-b-cb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-running-dark"} {...others} />);
}

export default Component;
