import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/g/g21s66bzs.css';
import '../../css/x/xlcp1d9yz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="g21s66bzs"/><path class="xlcp1d9yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hockey"} {...others} />);
}

export default Component;
