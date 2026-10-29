import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8o3flord.css';
import '../../css/f/fhojwdbhr.css';
import '../../css/e/ekb4jc54e.css';
import '../../css/b/bzemycgts.css';
import '../../css/s/shrwfibqq.css';
import '../../css/m/m7mdlfbju.css';
import '../../css/s/s19h21c1c.css';
import '../../css/e/e1jak4p2h.css';
import '../../css/c/cmc6k9b0t.css';
import '../../css/j/j6jqr8b5h.css';
import '../../css/i/imvg40b2v.css';
import '../../css/l/l4o799b4u.css';
import '../../css/o/o9j09248d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m8o3flord wm-k"/><path class="fhojwdbhr wm-k"/><path class="ekb4jc54e wm-k"/><path class="bzemycgts wm-k"/><path class="shrwfibqq wm-shine"/><path class="m7mdlfbju wm-a"/><path class="s19h21c1c wm-s"/><path class="e1jak4p2h wm-s"/><path class="cmc6k9b0t wm-s"/><path class="j6jqr8b5h wm-shine"/><path class="imvg40b2v wm-s"/><path class="l4o799b4u wm-s"/><path class="o9j09248d wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-pen"} {...others} />);
}

export default Component;
