import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1l1nfbop.css';
import '../../css/z/zshu-pbxi.css';
import '../../css/s/soo--9b7n.css';
import '../../css/p/p6gz69b4h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h1l1nfbop"/><path class="zshu-pbxi"/><path class="soo--9b7n"/><path class="p6gz69b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:kaaba"} {...others} />);
}

export default Component;
