import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgbgz_9qm.css';
import '../../css/k/kvlygp98w.css';
import '../../css/b/bnx5w9hsf.css';
import '../../css/p/pbzdigbbc.css';
import '../../css/d/dtyk4lgvh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bgbgz_9qm"/><path class="kvlygp98w"/><path class="bnx5w9hsf"/><path class="pbzdigbbc"/><path class="dtyk4lgvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rope-skipping"} {...others} />);
}

export default Component;
