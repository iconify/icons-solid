import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmy4bkbyv.css';
import '../../css/m/mh8yf9b3b.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tmy4bkbyv"/><path class="mh8yf9b3b"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:router-x-20"} {...others} />);
}

export default Component;
