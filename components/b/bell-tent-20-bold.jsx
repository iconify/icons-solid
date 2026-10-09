import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syjjg5boi.css';
import '../../css/q/qb-anoa-e.css';
import '../../css/l/l4lb-ym4l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="syjjg5boi"/><path class="qb-anoa-e"/><path class="l4lb-ym4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-tent-20-bold"} {...others} />);
}

export default Component;
