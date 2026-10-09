import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pufjjdbwp.css';
import '../../css/j/j2maz60ge.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pufjjdbwp"/><path class="j2maz60ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shipping-container-20-bold"} {...others} />);
}

export default Component;
