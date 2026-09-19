import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mud0sebky.css';
import '../../css/x/xgpm64bcj.css';
import '../../css/k/k8649hbxo.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBlisterPillsOvalX14Negative0)" class="cuyn6tgcc"><path class="mud0sebky"/><path clip-rule="evenodd" class="xgpm64bcj"/><path class="k8649hbxo"/></g><defs><clipPath id="healthiconsBlisterPillsOvalX14Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-oval-x14-negative"} {...others} />);
}

export default Component;
