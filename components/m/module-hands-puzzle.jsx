import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7ekum72w.css';
import '../../css/r/re-96z7kg.css';
import '../../css/k/k9q11sncz.css';
import '../../css/j/j2izu2byz.css';
import '../../css/n/ne5ktstwl.css';
import '../../css/e/e_zskol9s.css';
import '../../css/o/o165heb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r7ekum72w"/><path class="re-96z7kg"/><path class="k9q11sncz"/><path class="j2izu2byz"/><path class="ne5ktstwl"/><path class="e_zskol9s"/><path class="o165heb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:module-hands-puzzle"} {...others} />);
}

export default Component;
