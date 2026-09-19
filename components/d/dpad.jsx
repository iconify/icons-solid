import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_0ole9tf.css';
import '../../css/u/u6gce-6ue.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="l_0ole9tf"/><path class="u6gce-6ue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dpad"} {...others} />);
}

export default Component;
