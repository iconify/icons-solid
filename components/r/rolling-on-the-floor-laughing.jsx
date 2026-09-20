import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aefci_dod.css';
import '../../css/u/up_avt-ed.css';
import '../../css/b/b1m35ib7d.css';
import '../../css/i/ifp16_b1y.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/o/o8-00dc1q.css';
import '../../css/o/o4y55nbyr.css';
import '../../css/b/bdvf0pbxo.css';
import '../../css/w/w808gr_3y.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="aefci_dod"/><path class="up_avt-ed"/><path class="b1m35ib7d"/><path class="ifp16_b1y"/><g class="kdz4acc8r"><path class="o8-00dc1q"/><path class="o4y55nbyr"/><path class="bdvf0pbxo"/><path class="w808gr_3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rolling-on-the-floor-laughing"} {...others} />);
}

export default Component;
