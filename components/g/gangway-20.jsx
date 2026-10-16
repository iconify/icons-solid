import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7wahub6s.css';
import '../../css/j/j0ltuoz_j.css';
import '../../css/s/sd-l4j7ce.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w7wahub6s"/><path class="j0ltuoz_j"/><path class="sd-l4j7ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gangway-20"} {...others} />);
}

export default Component;
