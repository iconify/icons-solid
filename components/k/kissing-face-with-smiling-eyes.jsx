import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smp7o1bcq.css';
import '../../css/v/v9uf5bcgz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="smp7o1bcq"/><path class="v9uf5bcgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:kissing-face-with-smiling-eyes"} {...others} />);
}

export default Component;
