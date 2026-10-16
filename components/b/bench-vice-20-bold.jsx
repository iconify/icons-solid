import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxy1xwb1c.css';
import '../../css/p/p6wlddcnr.css';
import '../../css/d/dplnbtbni.css';
import '../../css/j/jrzue2bce.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xxy1xwb1c"/><path class="p6wlddcnr"/><path class="dplnbtbni"/><path class="jrzue2bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bench-vice-20-bold"} {...others} />);
}

export default Component;
