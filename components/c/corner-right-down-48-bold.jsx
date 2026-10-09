import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqe6l8ger.css';
import '../../css/v/vzdt97b6q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jqe6l8ger"/><path class="vzdt97b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-down-48-bold"} {...others} />);
}

export default Component;
