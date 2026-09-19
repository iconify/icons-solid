import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvdw19b_w.css';
import '../../css/i/iaw58s9pl.css';

const viewBox = {"width":38,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kvdw19b_w"/><path class="iaw58s9pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:envelope"} {...others} />);
}

export default Component;
