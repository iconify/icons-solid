import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spqow63td.css';
import '../../css/o/oodxeba0n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="spqow63td"/><path class="oodxeba0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-down-20-bold"} {...others} />);
}

export default Component;
