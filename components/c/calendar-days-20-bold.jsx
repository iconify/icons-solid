import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aum7pfzqi.css';
import '../../css/l/leb4hvjgy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aum7pfzqi"/><path class="leb4hvjgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-days-20-bold"} {...others} />);
}

export default Component;
