import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1lsisbwn.css';
import '../../css/u/uvgsmobvo.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="a1lsisbwn"/><path class="uvgsmobvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-right"} {...others} />);
}

export default Component;
