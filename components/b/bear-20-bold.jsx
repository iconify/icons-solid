import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjdv2dp9t.css';
import '../../css/s/sla-3ib_b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yjdv2dp9t"/><path class="sla-3ib_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bear-20-bold"} {...others} />);
}

export default Component;
