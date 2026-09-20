import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt4villyt.css';
import '../../css/d/di3yhtbnj.css';
import '../../css/z/zzmgb2sjr.css';
import '../../css/r/rv4rd8b8o.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="jt4villyt"/><g class="di3yhtbnj"><path clip-rule="evenodd" class="zzmgb2sjr"/><path class="rv4rd8b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layers-more-16"} {...others} />);
}

export default Component;
