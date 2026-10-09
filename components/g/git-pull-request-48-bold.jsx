import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0bcohnco.css';
import '../../css/y/yvipk86za.css';
import '../../css/v/vekg20bug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p0bcohnco"/><path class="yvipk86za"/><path class="vekg20bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-pull-request-48-bold"} {...others} />);
}

export default Component;
