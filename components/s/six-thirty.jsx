import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdo_nohnu.css';
import '../../css/v/vqeqa-caw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="cdo_nohnu"/><path class="vqeqa-caw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:six-thirty"} {...others} />);
}

export default Component;
