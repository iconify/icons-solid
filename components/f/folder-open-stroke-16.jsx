import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zd391yb8n.css';
import '../../css/e/er759ianl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="zd391yb8n"/><path class="er759ianl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:folder-open-stroke-16"} {...others} />);
}

export default Component;
