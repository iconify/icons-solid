import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw_f9jbmc.css';
import '../../css/f/f1xyaebmo.css';
import '../../css/m/m2qk5o2nd.css';
import '../../css/c/crbo13bgz.css';
import '../../css/d/dy_nph56k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dw_f9jbmc"/><path class="f1xyaebmo"/><path class="m2qk5o2nd"/><path class="crbo13bgz"/><path class="dy_nph56k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nps-enhanced-dark"} {...others} />);
}

export default Component;
