import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trz8ofble.css';
import '../../css/d/diva08b7c.css';
import '../../css/v/vxg-v0wsr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="trz8ofble"/><path class="diva08b7c"/><path class="vxg-v0wsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rainbow-20"} {...others} />);
}

export default Component;
