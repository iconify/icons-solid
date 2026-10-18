import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iccsyvk3j.css';
import '../../css/y/yz82tw-9z.css';
import '../../css/g/gm0aa1bxc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iccsyvk3j"/><path class="yz82tw-9z"/><path class="gm0aa1bxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contract-for-difference-20-bold"} {...others} />);
}

export default Component;
