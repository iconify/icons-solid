import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmgp-hp4m.css';
import '../../css/r/rdst0hbya.css';
import '../../css/y/yulc80b1h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rmgp-hp4m"/><path class="rdst0hbya"/><path class="yulc80b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-search-20-bold"} {...others} />);
}

export default Component;
