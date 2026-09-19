import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/fc6qgobqj.css';
import '../../css/z/z-bvqdpsa.css';
import '../../css/h/h2hir063e.css';
import '../../css/j/jsoxnmc1o.css';
import '../../css/c/ch35ztnhw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="fc6qgobqj"/><path class="z-bvqdpsa"/><path class="h2hir063e"/><rect class="jsoxnmc1o"/><path class="ch35ztnhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:industrial-scales"} {...others} />);
}

export default Component;
