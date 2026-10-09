import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz_20zb_f.css';
import '../../css/x/xotqs1byb.css';
import '../../css/t/teq-8kbsy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oz_20zb_f"/><path class="xotqs1byb"/><path class="teq-8kbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:demand-response-48-bold"} {...others} />);
}

export default Component;
