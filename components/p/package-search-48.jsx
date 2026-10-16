import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkv-eob5o.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/x/x-xvbvbnv.css';
import '../../css/a/auaqc0ftv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jkv-eob5o"/><path class="i0wzpzqff"/><path class="x-xvbvbnv"/><path class="auaqc0ftv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-search-48"} {...others} />);
}

export default Component;
