import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efg-ksb2t.css';
import '../../css/k/kib5neb7d.css';
import '../../css/l/lki-ik7dz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="efg-ksb2t"/><path class="kib5neb7d"/><path class="lki-ik7dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-health-worker"} {...others} />);
}

export default Component;
