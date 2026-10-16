import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0oa-qzdz.css';
import '../../css/e/etrl1rckl.css';
import '../../css/x/x8kd897hi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0oa-qzdz"/><path class="etrl1rckl"/><path class="x8kd897hi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tyre-20-bold"} {...others} />);
}

export default Component;
