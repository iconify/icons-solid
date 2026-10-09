import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0--pbdfi.css';
import '../../css/z/zxgl3h68t.css';
import '../../css/w/wo93-6h9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p0--pbdfi"/><path class="zxgl3h68t"/><path class="wo93-6h9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scissors-20"} {...others} />);
}

export default Component;
