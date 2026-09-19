import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8v7bub6c.css';
import '../../css/e/eeij7990s.css';
import '../../css/n/nikvdmbrf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x8v7bub6c"/><path class="eeij7990s"/><path clip-rule="evenodd" class="nikvdmbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-fairy"} {...others} />);
}

export default Component;
