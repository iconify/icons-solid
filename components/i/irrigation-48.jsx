import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc52um7uh.css';
import '../../css/t/tmh227bqz.css';
import '../../css/n/n1x_nropw.css';
import '../../css/t/t05do7bkv.css';
import '../../css/p/p1wt-_xim.css';
import '../../css/d/dpxwcnynr.css';
import '../../css/f/fjd7sxioi.css';
import '../../css/n/ngb53ubfd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bc52um7uh"/><path class="tmh227bqz"/><path class="n1x_nropw"/><path class="t05do7bkv"/><path class="p1wt-_xim"/><path class="dpxwcnynr"/><path class="fjd7sxioi"/><path class="ngb53ubfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:irrigation-48"} {...others} />);
}

export default Component;
