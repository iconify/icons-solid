import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfdf4mgjs.css';
import '../../css/d/dbhc3c9og.css';
import '../../css/x/x8izqachk.css';
import '../../css/v/vx4rklble.css';
import '../../css/d/dp94l_bay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yfdf4mgjs"/><path class="dbhc3c9og"/><path class="x8izqachk"/><path class="vx4rklble"/><path class="dp94l_bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scatola-magica-dark"} {...others} />);
}

export default Component;
