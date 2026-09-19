import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mn8w30d0i.css';
import '../../css/s/st9u1u3tq.css';
import '../../css/h/h8ey_rjec.css';
import '../../css/z/zi7nydz_s.css';
import '../../css/r/rcdnxiqxf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mn8w30d0i"/><path class="st9u1u3tq"/><path class="h8ey_rjec"/><path class="zi7nydz_s"/><path class="rcdnxiqxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chimney"} {...others} />);
}

export default Component;
