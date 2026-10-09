import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvjm-6b1r.css';
import '../../css/h/hn820sblx.css';
import '../../css/w/wkidug_7n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mvjm-6b1r"/><path class="hn820sblx"/><path class="wkidug_7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-shaft-20-bold"} {...others} />);
}

export default Component;
