import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogowslhhc.css';
import '../../css/d/dnvyigb_c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ogowslhhc"/><path class="dnvyigb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-sankey-20-bold"} {...others} />);
}

export default Component;
