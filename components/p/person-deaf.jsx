import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qf6yznbcv.css';
import '../../css/n/nc9n0dbna.css';
import '../../css/i/ikaa5acww.css';
import '../../css/z/z4vz-wxoh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qf6yznbcv"/><path class="nc9n0dbna"/><path class="ikaa5acww"/><path class="z4vz-wxoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-deaf"} {...others} />);
}

export default Component;
