import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o36z5zbfl.css';
import '../../css/a/am4cq56ck.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="o36z5zbfl"/><path class="am4cq56ck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:postcard-duotone"} {...others} />);
}

export default Component;
