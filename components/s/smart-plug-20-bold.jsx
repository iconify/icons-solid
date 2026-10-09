import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whf-7i3fs.css';
import '../../css/d/dqs7t3alo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="whf-7i3fs"/><path class="dqs7t3alo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-plug-20-bold"} {...others} />);
}

export default Component;
