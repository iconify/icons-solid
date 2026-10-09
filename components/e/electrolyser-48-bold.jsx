import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxj-05m9f.css';
import '../../css/w/wafsj8bhi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sxj-05m9f"/><path class="wafsj8bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-48-bold"} {...others} />);
}

export default Component;
