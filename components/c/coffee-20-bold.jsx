import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsm6o3u7u.css';
import '../../css/u/uw4qzh0ap.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lsm6o3u7u"/><path class="uw4qzh0ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-20-bold"} {...others} />);
}

export default Component;
