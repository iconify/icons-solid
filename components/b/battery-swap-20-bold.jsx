import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_7rhjb0r.css';
import '../../css/h/h7z2y_agc.css';
import '../../css/d/dzijucbcp.css';
import '../../css/a/asxj_mbva.css';
import '../../css/t/t4futcxuj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e_7rhjb0r"/><path class="h7z2y_agc"/><path class="dzijucbcp"/><path class="asxj_mbva"/><path class="t4futcxuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-swap-20-bold"} {...others} />);
}

export default Component;
