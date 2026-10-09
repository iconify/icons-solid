import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-pfn5jar.css';
import '../../css/n/nben1wb6w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-pfn5jar"/><path class="nben1wb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:search-48-bold"} {...others} />);
}

export default Component;
