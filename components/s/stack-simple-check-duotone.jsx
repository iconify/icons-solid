import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y66s-h5mg.css';
import '../../css/w/wqwikdi6u.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="y66s-h5mg"/><path class="wqwikdi6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:stack-simple-check-duotone"} {...others} />);
}

export default Component;
