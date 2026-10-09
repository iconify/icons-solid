import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhwezzbsp.css';
import '../../css/b/b_21f101v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bhwezzbsp"/><path class="b_21f101v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tanker-truck-20"} {...others} />);
}

export default Component;
