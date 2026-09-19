import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/i6eudtbje.css';
import '../../css/q/q4-zvdwys.css';
import '../../css/j/jb7mlffim.css';
import '../../css/b/b77ks6bmh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="i6eudtbje"/><path clip-rule="evenodd" class="q4-zvdwys"/><path class="jb7mlffim"/><path class="b77ks6bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bottle"} {...others} />);
}

export default Component;
