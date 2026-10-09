import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kavo--bbr.css';
import '../../css/l/ll5uu22sv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kavo--bbr"/><path class="ll5uu22sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-48-bold"} {...others} />);
}

export default Component;
