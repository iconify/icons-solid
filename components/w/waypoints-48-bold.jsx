import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnk58xbgu.css';
import '../../css/i/ifbfh7xzx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rnk58xbgu"/><path class="ifbfh7xzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waypoints-48-bold"} {...others} />);
}

export default Component;
