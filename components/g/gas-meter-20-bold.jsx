import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbys_lb8n.css';
import '../../css/y/ykkgrkb-l.css';
import '../../css/d/d-kptbbco.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbys_lb8n"/><path class="ykkgrkb-l"/><path class="d-kptbbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-meter-20-bold"} {...others} />);
}

export default Component;
