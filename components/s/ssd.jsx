import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvhdk6bks.css';
import '../../css/r/rzzzk2g-f.css';
import '../../css/t/tn0uqua-i.css';
import '../../css/f/fsyzf-b_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xvhdk6bks"/><path class="rzzzk2g-f"/><circle class="tn0uqua-i"/><path class="fsyzf-b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ssd"} {...others} />);
}

export default Component;
