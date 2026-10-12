import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz3cfsc3k.css';
import '../../css/p/pkhcb0o2g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wz3cfsc3k"/><path class="pkhcb0o2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:backpack-20-bold"} {...others} />);
}

export default Component;
