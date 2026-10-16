import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bls5yhbwz.css';
import '../../css/r/r7vl_0u4z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bls5yhbwz"/><path class="r7vl_0u4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:outage-map-20-bold"} {...others} />);
}

export default Component;
