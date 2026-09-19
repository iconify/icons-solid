import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pqqm4uc3z.css';
import '../../css/v/vn2l7rvmc.css';
import '../../css/n/nxkp0lbtk.css';
import '../../css/l/lrv-rp0-f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pqqm4uc3z"/><path class="vn2l7rvmc"/><path class="nxkp0lbtk"/><path class="lrv-rp0-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort-one"} {...others} />);
}

export default Component;
