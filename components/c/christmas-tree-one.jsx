import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pj3lv5b_y.css';
import '../../css/q/q9m36mbai.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pj3lv5b_y"/><path class="q9m36mbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:christmas-tree-one"} {...others} />);
}

export default Component;
