import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj44hh7wm.css';
import '../../css/g/gap1gyb0w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wj44hh7wm"/><path class="gap1gyb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:doorbell-20-bold"} {...others} />);
}

export default Component;
