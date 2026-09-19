import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1ny50d5n.css';
import '../../css/e/ediclqbms.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="d1ny50d5n"/><path class="ediclqbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:map-of-japan"} {...others} />);
}

export default Component;
