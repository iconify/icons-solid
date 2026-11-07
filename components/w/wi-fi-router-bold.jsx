import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ullszbbqu.css';
import '../../css/d/dy4_z9gcp.css';
import '../../css/y/yfs8wlcdx.css';
import '../../css/l/lf_p4sb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ullszbbqu"/><path class="dy4_z9gcp"/><path class="yfs8wlcdx"/><path clip-rule="evenodd" class="lf_p4sb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-bold"} {...others} />);
}

export default Component;
