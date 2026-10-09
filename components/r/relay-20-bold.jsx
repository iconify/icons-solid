import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdx1pbuzq.css';
import '../../css/d/dzwhzcc4a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cdx1pbuzq"/><path class="dzwhzcc4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:relay-20-bold"} {...others} />);
}

export default Component;
