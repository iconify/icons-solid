import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt6n36bom.css';
import '../../css/k/k6hjx-z6j.css';
import '../../css/i/i-a1w2n6j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gt6n36bom"/><path class="k6hjx-z6j"/><path class="i-a1w2n6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-down-20-bold"} {...others} />);
}

export default Component;
