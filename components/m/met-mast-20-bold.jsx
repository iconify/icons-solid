import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4qu0qbdb.css';
import '../../css/u/uu6r2xbvg.css';
import '../../css/l/l6bm51bjm.css';
import '../../css/q/qpt-xtbcx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p4qu0qbdb"/><path class="uu6r2xbvg"/><path class="l6bm51bjm"/><path class="qpt-xtbcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:met-mast-20-bold"} {...others} />);
}

export default Component;
