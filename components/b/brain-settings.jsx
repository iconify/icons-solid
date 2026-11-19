import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px_qv2v2h.css';
import '../../css/b/bjeyb8bmk.css';
import '../../css/q/qn7-veb5f.css';
import '../../css/b/bfhxsz8gp.css';
import '../../css/b/by1snq5ag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="px_qv2v2h"/><path class="bjeyb8bmk"/><path class="qn7-veb5f"/><circle class="bfhxsz8gp"/><path class="by1snq5ag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brain-settings"} {...others} />);
}

export default Component;
