import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dz3knnbdr.css';
import '../../css/u/u3pa-zboc.css';
import '../../css/x/xsvqqibcb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="dz3knnbdr"/><path class="u3pa-zboc"/><ellipse class="xsvqqibcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:magic-hat"} {...others} />);
}

export default Component;
