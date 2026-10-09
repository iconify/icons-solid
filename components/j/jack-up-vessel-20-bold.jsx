import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s71x42bul.css';
import '../../css/d/dutsueb3v.css';
import '../../css/y/ybedvpc_m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s71x42bul"/><path class="dutsueb3v"/><path class="ybedvpc_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jack-up-vessel-20-bold"} {...others} />);
}

export default Component;
