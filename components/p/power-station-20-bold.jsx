import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyz6g2bdx.css';
import '../../css/f/fad7f9tkf.css';
import '../../css/w/wmo2g_b9v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tyz6g2bdx"/><path class="fad7f9tkf"/><path class="wmo2g_b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-station-20-bold"} {...others} />);
}

export default Component;
