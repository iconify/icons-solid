import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/x/x8k7hlbln.css';
import '../../css/l/lifaxmm9u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="x8k7hlbln"/><path class="lifaxmm9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plus-circle-20"} {...others} />);
}

export default Component;
