import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hndsosv_s.css';
import '../../css/n/nq261ib2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect transform="rotate(-45 4 24)" class="hndsosv_s"/><rect transform="rotate(-45 16 24)" class="nq261ib2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:merge"} {...others} />);
}

export default Component;
