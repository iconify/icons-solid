import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xew9pqb-j.css';
import '../../css/l/ld-_jqbkr.css';
import '../../css/a/auaqc0ftv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xew9pqb-j"/><path class="ld-_jqbkr"/><path class="auaqc0ftv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-search-48"} {...others} />);
}

export default Component;
