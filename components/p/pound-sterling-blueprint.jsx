import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n2eefob8r.css';
import '../../css/e/ez5ki6tfk.css';
import '../../css/b/bp506jgve.css';
import '../../css/i/ik2bhobgk.css';
import '../../css/g/g56xwjh7n.css';
import '../../css/q/qc3_bib_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n2eefob8r wm-deco"/><path class="ez5ki6tfk wm-deco"/><path class="bp506jgve wm-k"/><path class="ik2bhobgk wm-a"/><path class="g56xwjh7n wm-k"/><path class="qc3_bib_p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pound-sterling-blueprint"} {...others} />);
}

export default Component;
