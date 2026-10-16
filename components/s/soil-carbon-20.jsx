import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsovfjb6d.css';
import '../../css/q/qvlvqac0m.css';
import '../../css/c/cxs00ob8q.css';
import '../../css/y/y2485_kyn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dsovfjb6d"/><path class="qvlvqac0m"/><path class="cxs00ob8q"/><path class="y2485_kyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-carbon-20"} {...others} />);
}

export default Component;
