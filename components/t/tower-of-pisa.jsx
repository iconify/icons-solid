import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/i/iwry_ybwm.css';
import '../../css/j/jobz__5yb.css';
import '../../css/l/lg74ibcdw.css';
import '../../css/v/vdv8kyb4j.css';
import '../../css/z/zkapnccfe.css';
import '../../css/e/e9ud9bccr.css';
import '../../css/f/fqfx4bc1v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ii0wlebwq"/><path class="iwry_ybwm"/><path class="jobz__5yb"/><path class="lg74ibcdw"/><path class="vdv8kyb4j"/><path class="zkapnccfe"/><rect transform="rotate(15 25.183 4.387)" class="e9ud9bccr"/><path class="fqfx4bc1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tower-of-pisa"} {...others} />);
}

export default Component;
