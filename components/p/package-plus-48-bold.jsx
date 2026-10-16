import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6_n-55ky.css';
import '../../css/r/r4-rvcapq.css';
import '../../css/g/ggak2qltj.css';
import '../../css/j/jyfi0eawb.css';
import '../../css/w/wii29dbas.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p6_n-55ky"/><path class="r4-rvcapq"/><path class="ggak2qltj"/><path class="jyfi0eawb"/><path class="wii29dbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-plus-48-bold"} {...others} />);
}

export default Component;
