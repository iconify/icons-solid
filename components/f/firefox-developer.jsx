import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn051tbpi.css';
import '../../css/l/lljequbmk.css';
import '../../css/f/fuqlczbzs.css';
import '../../css/q/qj4npqwtq.css';
import '../../css/a/a37drjooo.css';
import '../../css/s/sn-weov4c.css';
import '../../css/g/gqq1qhs1i.css';
import '../../css/t/tgmblfj6m.css';
import '../../css/f/f71e01bah.css';
import '../../css/j/j0i6m9b-q.css';
import '../../css/z/z04drlb1l.css';
import '../../css/k/kr0p7ac9r.css';
import '../../css/k/km_zi0b9r.css';
import '../../css/i/ik0ho9_ch.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rn051tbpi"/><path clip-rule="evenodd" class="lljequbmk"/><circle class="fuqlczbzs"/><g class="qj4npqwtq"><path clip-rule="evenodd" class="a37drjooo"/><path class="sn-weov4c"/></g><path class="gqq1qhs1i"/><path clip-rule="evenodd" class="tgmblfj6m"/><path class="f71e01bah"/><path clip-rule="evenodd" class="j0i6m9b-q"/><g class="z04drlb1l"><path class="kr0p7ac9r"/><path class="km_zi0b9r"/><path class="ik0ho9_ch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:firefox-developer"} {...others} />);
}

export default Component;
