import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/b/ba4lqtb1c.css';
import '../../css/o/osabe0b7m.css';
import '../../css/d/dqletew1v.css';
import '../../css/t/th3wgyekk.css';
import '../../css/r/rz1zspexb.css';
import '../../css/y/yk3om2bcn.css';
import '../../css/t/tzhrydriz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="ba4lqtb1c"/><path class="osabe0b7m"/><circle class="dqletew1v"/><circle class="th3wgyekk"/><circle class="rz1zspexb"/><circle class="yk3om2bcn"/><circle class="tzhrydriz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hdmi-connector"} {...others} />);
}

export default Component;
