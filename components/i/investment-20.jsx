import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rydoqccdc.css';
import '../../css/m/mdfd3zbon.css';
import '../../css/z/z_kowcmek.css';
import '../../css/k/kldwy1z4l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rydoqccdc"/><path class="mdfd3zbon"/><path class="z_kowcmek"/><path class="kldwy1z4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:investment-20"} {...others} />);
}

export default Component;
