import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtvm8qbid.css';
import '../../css/n/n1vzbldsk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vtvm8qbid"/><path class="n1vzbldsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-horizontal-48-bold"} {...others} />);
}

export default Component;
