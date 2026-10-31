import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/estdgvbtb.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/e/e6g03lb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="estdgvbtb"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="e6g03lb7m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:kanban"} {...others} />);
}

export default Component;
