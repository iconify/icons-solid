import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2nplbcdb.css';
import '../../css/z/zswjyimei.css';
import '../../css/p/pscvu07cr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p2nplbcdb"/><path class="zswjyimei"/><path class="pscvu07cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-9v-20-bold"} {...others} />);
}

export default Component;
