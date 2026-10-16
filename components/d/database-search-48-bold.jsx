import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbbfuqbum.css';
import '../../css/l/l7enx2kfy.css';
import '../../css/z/z9u6_hb0a.css';
import '../../css/n/nzvyk8_7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbbfuqbum"/><path class="l7enx2kfy"/><path class="z9u6_hb0a"/><path class="nzvyk8_7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-search-48-bold"} {...others} />);
}

export default Component;
