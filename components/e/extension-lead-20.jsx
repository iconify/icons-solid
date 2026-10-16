import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av2i24b1f.css';
import '../../css/i/ifjmab6ox.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="av2i24b1f"/><path class="ifjmab6ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:extension-lead-20"} {...others} />);
}

export default Component;
