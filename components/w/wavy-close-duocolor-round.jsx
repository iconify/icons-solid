import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tocao8blo.css';
import '../../css/y/yfhcqibox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tocao8blo"/><path class="yfhcqibox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wavy-close-duocolor-round"} {...others} />);
}

export default Component;
