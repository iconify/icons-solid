import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b46enfdbc.css';
import '../../css/p/pv6xrdqau.css';
import '../../css/r/ry_pmyy0b.css';
import '../../css/i/irk8xhysf.css';
import '../../css/y/y228wxbbt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b46enfdbc"/><path class="pv6xrdqau"/><path class="ry_pmyy0b"/><path class="irk8xhysf"/><path class="y228wxbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wetland-48"} {...others} />);
}

export default Component;
