import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpg9p2bhv.css';
import '../../css/l/l05mycboi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hpg9p2bhv"/><path class="l05mycboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paragraph-20-bold"} {...others} />);
}

export default Component;
