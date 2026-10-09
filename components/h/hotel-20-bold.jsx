import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyt2h3uvs.css';
import '../../css/z/zb43x5bxp.css';
import '../../css/m/mp27osukt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hyt2h3uvs"/><path class="zb43x5bxp"/><path class="mp27osukt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hotel-20-bold"} {...others} />);
}

export default Component;
