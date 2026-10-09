import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwqdcgbku.css';
import '../../css/o/oow25ab3t.css';
import '../../css/p/pc1ke3bbq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nwqdcgbku"/><path class="oow25ab3t"/><path class="pc1ke3bbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bot-20-bold"} {...others} />);
}

export default Component;
