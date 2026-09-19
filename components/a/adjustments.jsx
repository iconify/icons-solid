import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2hwl6bre.css';
import '../../css/d/dz_dnxb8k.css';

const viewBox = {"width":33,"height":32};
const content = `<g class="cuyn6tgcc"><path class="w2hwl6bre"/><path class="dz_dnxb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:adjustments"} {...others} />);
}

export default Component;
