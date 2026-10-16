import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp_3l1bkn.css';
import '../../css/i/ij10vk6wc.css';
import '../../css/x/xa0ui5bez.css';
import '../../css/y/yw0epjfyt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fp_3l1bkn"/><path class="ij10vk6wc"/><path class="xa0ui5bez"/><path class="yw0epjfyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-storage-20-bold"} {...others} />);
}

export default Component;
