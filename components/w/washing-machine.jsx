import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nuo1aqbjx.css';
import '../../css/m/mzrtbjbnt.css';
import '../../css/j/jdbtn82wh.css';
import '../../css/q/qhkj8rbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nuo1aqbjx"/><path class="mzrtbjbnt"/><circle class="jdbtn82wh"/><path class="qhkj8rbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:washing-machine"} {...others} />);
}

export default Component;
