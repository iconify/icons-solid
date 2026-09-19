import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gkbbdf9be.css';
import '../../css/m/muj7y6sdn.css';
import '../../css/w/wqf1kfbdl.css';
import '../../css/x/x_u2r1m_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="gkbbdf9be"/><path class="muj7y6sdn"/><path class="wqf1kfbdl"/><path class="x_u2r1m_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cycle-one"} {...others} />);
}

export default Component;
