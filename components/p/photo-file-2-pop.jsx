import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6s_mu8dx.css';
import '../../css/e/e7oqqbbmp.css';
import '../../css/x/xmpm2dmjb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m6s_mu8dx"/><path class="e7oqqbbmp"/><path class="xmpm2dmjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:photo-file-2-pop"} {...others} />);
}

export default Component;
