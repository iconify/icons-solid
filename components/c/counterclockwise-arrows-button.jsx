import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-2oiub6r.css';
import '../../css/g/gfor1zb8m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="a-2oiub6r"/><path class="gfor1zb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:counterclockwise-arrows-button"} {...others} />);
}

export default Component;
