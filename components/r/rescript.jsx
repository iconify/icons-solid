import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/w/w03w98eed.css';
import '../../css/v/vzmjekozx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="w03w98eed"/><path class="vzmjekozx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rescript"} {...others} />);
}

export default Component;
