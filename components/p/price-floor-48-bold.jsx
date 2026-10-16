import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpel3hezc.css';
import '../../css/s/sqy8txize.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpel3hezc"/><path class="sqy8txize"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-floor-48-bold"} {...others} />);
}

export default Component;
