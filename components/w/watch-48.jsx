import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug38o3b8b.css';
import '../../css/p/p5wcu7plu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ug38o3b8b"/><path class="p5wcu7plu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:watch-48"} {...others} />);
}

export default Component;
