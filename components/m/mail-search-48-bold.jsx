import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oku93bowu.css';
import '../../css/p/p2-gc3lvi.css';
import '../../css/n/nzvyk8_7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oku93bowu"/><path class="p2-gc3lvi"/><path class="nzvyk8_7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-search-48-bold"} {...others} />);
}

export default Component;
