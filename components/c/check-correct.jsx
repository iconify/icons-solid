import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mc23xac6v.css';
import '../../css/s/scn74gbpo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mc23xac6v"/><path class="scn74gbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:check-correct"} {...others} />);
}

export default Component;
