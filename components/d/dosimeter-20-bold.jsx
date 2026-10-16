import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b63t5_b0n.css';
import '../../css/u/ufacyhbgw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b63t5_b0n"/><path class="ufacyhbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dosimeter-20-bold"} {...others} />);
}

export default Component;
