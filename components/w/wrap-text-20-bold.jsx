import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt6-vgweh.css';
import '../../css/y/yu6035bqd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gt6-vgweh"/><path class="yu6035bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrap-text-20-bold"} {...others} />);
}

export default Component;
