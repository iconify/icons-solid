import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kft8x8isq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kft8x8isq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-bar-vertical-stacked"} {...others} />);
}

export default Component;
