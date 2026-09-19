import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujrvc6l4r.css';
import '../../css/b/b3hvwyb-p.css';
import '../../css/k/klfz4qg8n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ujrvc6l4r"/><path class="b3hvwyb-p"/><path class="klfz4qg8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pilot"} {...others} />);
}

export default Component;
