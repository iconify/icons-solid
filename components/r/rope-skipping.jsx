import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgbgz_9qm.css';
import '../../css/f/f45k75b3z.css';
import '../../css/b/bnx5w9hsf.css';
import '../../css/u/uxzjil5jx.css';
import '../../css/d/dtyk4lgvh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bgbgz_9qm"/><path class="f45k75b3z"/><path class="bnx5w9hsf"/><path class="uxzjil5jx"/><path class="dtyk4lgvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rope-skipping"} {...others} />);
}

export default Component;
