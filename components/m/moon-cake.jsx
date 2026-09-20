import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz9ir8k8f.css';
import '../../css/b/bkimdzbtm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mi65xp0-o.css';
import '../../css/a/ahis65mvs.css';
import '../../css/s/sm1v59kif.css';
import '../../css/i/itsj0sbsr.css';
import '../../css/d/dxmkb7dkq.css';
import '../../css/c/cpo5xlxlm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pz9ir8k8f"/><path class="bkimdzbtm"/><g class="jn8qy4bru"><path class="mi65xp0-o"/><path class="ahis65mvs"/></g><g class="sm1v59kif"><path class="itsj0sbsr"/><path class="dxmkb7dkq"/><path class="cpo5xlxlm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:moon-cake"} {...others} />);
}

export default Component;
