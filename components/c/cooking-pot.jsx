import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/giy7lbcrz.css';
import '../../css/d/d-2zqeb9r.css';
import '../../css/v/vg9in8b3g.css';
import '../../css/o/o1oyxdxlu.css';
import '../../css/g/genv8y10f.css';
import '../../css/y/ywy09jdem.css';
import '../../css/x/xt9ybvbkg.css';
import '../../css/m/muscrkzvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="giy7lbcrz"/><path class="d-2zqeb9r"/><path class="vg9in8b3g wm-shine"/><path class="o1oyxdxlu wm-k"/><path class="genv8y10f wm-a"/><path class="ywy09jdem"/><path class="xt9ybvbkg"/><path class="muscrkzvf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cooking-pot"} {...others} />);
}

export default Component;
