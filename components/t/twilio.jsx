import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldq3ns_rs.css';
import '../../css/r/rxabmwl2z.css';
import '../../css/w/w5l9l10-p.css';
import '../../css/g/gug947obs.css';
import '../../css/v/v_aqbfbaf.css';
import '../../css/q/q2744t22g.css';

const viewBox = {"width":64,"height":64};
const content = `<g transform="translate(0 .047)scale(.93704)" class="ldq3ns_rs"><path class="rxabmwl2z"/><circle class="w5l9l10-p"/><circle class="gug947obs"/><circle class="v_aqbfbaf"/><circle class="q2744t22g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:twilio"} {...others} />);
}

export default Component;
