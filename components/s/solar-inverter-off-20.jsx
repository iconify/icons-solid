import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-z8u6wyr.css';
import '../../css/l/l9s722bnc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c-z8u6wyr"/><path class="l9s722bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-off-20"} {...others} />);
}

export default Component;
