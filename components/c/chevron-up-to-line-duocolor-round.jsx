import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srugpnb9t.css';
import '../../css/v/v2vk_nezw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="srugpnb9t"/><path class="v2vk_nezw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-up-to-line-duocolor-round"} {...others} />);
}

export default Component;
