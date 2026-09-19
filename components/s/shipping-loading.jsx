import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zykliibio.css';
import '../../css/u/u7d1qdbut.css';
import '../../css/b/b6kmce7vq.css';
import '../../css/l/lxvhw1bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zykliibio"/><path class="u7d1qdbut"/><path class="b6kmce7vq"/><path class="lxvhw1bbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shipping-loading"} {...others} />);
}

export default Component;
