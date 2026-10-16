import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4vlm1c_q.css';
import '../../css/l/lt9-gpbgp.css';
import '../../css/h/hv50mzxzc.css';
import '../../css/l/lrmj16b_q.css';
import '../../css/j/j-rqwlqxm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m4vlm1c_q"/><path class="lt9-gpbgp"/><path class="hv50mzxzc"/><path class="lrmj16b_q"/><path class="j-rqwlqxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ch4-molecule-48-bold"} {...others} />);
}

export default Component;
