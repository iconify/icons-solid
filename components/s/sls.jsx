import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rio7b8pmk.css';
import '../../css/y/yo0j_cc9l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="rio7b8pmk"/><path class="yo0j_cc9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:sls"} {...others} />);
}

export default Component;
