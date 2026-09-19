import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2zlohrem.css';
import '../../css/i/i4_597bsq.css';
import '../../css/w/wrz0hmb2v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="k2zlohrem"/><path class="i4_597bsq"/><path class="wrz0hmb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:clipboard"} {...others} />);
}

export default Component;
