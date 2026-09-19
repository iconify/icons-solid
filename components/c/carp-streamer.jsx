import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m24zsubqa.css';
import '../../css/j/jexu0io0m.css';
import '../../css/a/aq7hdca_f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m24zsubqa"/><path class="jexu0io0m"/><path class="aq7hdca_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:carp-streamer"} {...others} />);
}

export default Component;
