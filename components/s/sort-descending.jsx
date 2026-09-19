import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmfj29_ra.css';
import '../../css/d/dv916pbgy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zmfj29_ra"/><path class="dv916pbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:sort-descending"} {...others} />);
}

export default Component;
