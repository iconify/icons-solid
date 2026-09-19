import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nm8an2b-h.css';
import '../../css/u/uk9zb2bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="nm8an2b-h"/><path class="uk9zb2bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-generative"} {...others} />);
}

export default Component;
