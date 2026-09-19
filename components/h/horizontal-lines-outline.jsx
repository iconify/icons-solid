import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/cba1_qbkr.css';
import '../../css/v/vkca7qppm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="cba1_qbkr"/><path class="vkca7qppm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:horizontal-lines-outline"} {...others} />);
}

export default Component;
