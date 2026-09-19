import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/x/x7-298bge.css';
import '../../css/j/jp5a_pbwx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="x7-298bge"/><path class="jp5a_pbwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:treadmill"} {...others} />);
}

export default Component;
