import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x17iilibs.css';
import '../../css/c/c3k235b9x.css';
import '../../css/l/ligjalpvc.css';
import '../../css/v/vj9qhvlqx.css';

const viewBox = {"width":250,"height":250};
const content = `<g class="x17iilibs"><path class="c3k235b9x"/><path class="ligjalpvc"/><path class="vj9qhvlqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:remotion"} {...others} />);
}

export default Component;
