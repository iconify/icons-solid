import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr2ao-b5d.css';
import '../../css/q/quh-_jkrk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pr2ao-b5d"/><path class="quh-_jkrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-off-20-bold"} {...others} />);
}

export default Component;
