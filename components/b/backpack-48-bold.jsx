import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur0oo-1qr.css';
import '../../css/q/quz16u80s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ur0oo-1qr"/><path class="quz16u80s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:backpack-48-bold"} {...others} />);
}

export default Component;
