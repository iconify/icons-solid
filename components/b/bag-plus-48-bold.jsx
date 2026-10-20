import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqivvfbyi.css';
import '../../css/m/m6q9glbvh.css';
import '../../css/k/k598mbbge.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aqivvfbyi"/><path class="m6q9glbvh"/><path class="k598mbbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-plus-48-bold"} {...others} />);
}

export default Component;
