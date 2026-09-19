import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5qhs0bhp.css';
import '../../css/p/p_ltn334q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="v5qhs0bhp"/><path class="p_ltn334q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intestinal-pain2x-outline"} {...others} />);
}

export default Component;
