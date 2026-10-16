import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qemxtqb3v.css';
import '../../css/r/r4-rvcapq.css';
import '../../css/m/m3pw4db4r.css';
import '../../css/n/nzvyk8_7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qemxtqb3v"/><path class="r4-rvcapq"/><path class="m3pw4db4r"/><path class="nzvyk8_7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-search-48-bold"} {...others} />);
}

export default Component;
