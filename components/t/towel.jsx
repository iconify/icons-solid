import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/u/u-xs2kb6z.css';
import '../../css/l/lwcbfpoys.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="u-xs2kb6z"/><path class="lwcbfpoys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:towel"} {...others} />);
}

export default Component;
