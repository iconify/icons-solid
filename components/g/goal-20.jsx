import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4h0zsw5y.css';
import '../../css/w/wuq77txzp.css';
import '../../css/j/j-rokuiwf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p4h0zsw5y"/><path class="wuq77txzp"/><path class="j-rokuiwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:goal-20"} {...others} />);
}

export default Component;
