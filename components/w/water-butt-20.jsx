import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtxjgl01m.css';
import '../../css/z/zy3xx9cdd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtxjgl01m"/><path class="zy3xx9cdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-butt-20"} {...others} />);
}

export default Component;
