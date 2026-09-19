import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iasx04kql.css';
import '../../css/g/g2wzoo_hf.css';
import '../../css/n/nbgr6-bnn.css';
import '../../css/w/wklmo9b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iasx04kql"/><path class="g2wzoo_hf"/><path class="nbgr6-bnn"/><path class="wklmo9b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-time-date-day"} {...others} />);
}

export default Component;
