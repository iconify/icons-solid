import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1c9zmbsp.css';
import '../../css/l/lwy4_6bpt.css';
import '../../css/e/ex7ic0gtg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f1c9zmbsp"/><path class="lwy4_6bpt"/><path class="ex7ic0gtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-down-20-bold"} {...others} />);
}

export default Component;
