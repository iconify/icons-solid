import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpmvct1xz.css';
import '../../css/e/exkkztbix.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kpmvct1xz"/><path class="exkkztbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-x-48"} {...others} />);
}

export default Component;
