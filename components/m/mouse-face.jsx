import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/helllprlg.css';
import '../../css/s/sko53h2-u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="helllprlg"/><path class="sko53h2-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:mouse-face"} {...others} />);
}

export default Component;
