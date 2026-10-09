import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi9mw4qcx.css';
import '../../css/y/yz--wtxhz.css';
import '../../css/h/hubf0zbho.css';
import '../../css/b/bau81vnse.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bi9mw4qcx"/><path class="yz--wtxhz"/><path class="hubf0zbho"/><path class="bau81vnse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scales-20-bold"} {...others} />);
}

export default Component;
