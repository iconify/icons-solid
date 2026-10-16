import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn0um0h7v.css';
import '../../css/l/lpo20xysi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hn0um0h7v"/><path class="lpo20xysi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:black-start-20-bold"} {...others} />);
}

export default Component;
