import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mwputlbfe.css';
import '../../css/d/d2b4ewwfd.css';
import '../../css/i/ixjr9rmdy.css';
import '../../css/q/qxtabzb_d.css';
import '../../css/o/o7ncecc3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mwputlbfe wm-shadow"/><path class="d2b4ewwfd"/><path class="ixjr9rmdy"/><path class="qxtabzb_d"/><path class="o7ncecc3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:archive-restore"} {...others} />);
}

export default Component;
