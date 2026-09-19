import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/ho2pnibko.css';
import '../../css/a/apvo4cjdv.css';
import '../../css/e/efs1pmwgc.css';
import '../../css/t/t0-jhwb6f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ho2pnibko"/><path class="apvo4cjdv"/><rect class="efs1pmwgc"/><circle class="t0-jhwb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baseball-cap"} {...others} />);
}

export default Component;
