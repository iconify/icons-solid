import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6apofftk.css';
import '../../css/n/nsusglb8a.css';
import '../../css/l/lca41vbdh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="s6apofftk"/><circle transform="matrix(-1 0 0 1 24 24)" class="nsusglb8a"/><path class="lca41vbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:auto-focus"} {...others} />);
}

export default Component;
