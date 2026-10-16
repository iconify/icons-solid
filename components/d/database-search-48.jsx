import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzpdxtbdv.css';
import '../../css/v/vf6e2yxfs.css';
import '../../css/v/vtjv8bcfu.css';
import '../../css/a/auaqc0ftv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lzpdxtbdv"/><path class="vf6e2yxfs"/><path class="vtjv8bcfu"/><path class="auaqc0ftv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-search-48"} {...others} />);
}

export default Component;
