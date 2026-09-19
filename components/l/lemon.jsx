import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nji_bybpl.css';
import '../../css/s/s-_6qybzr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="nji_bybpl"/><path class="s-_6qybzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lemon"} {...others} />);
}

export default Component;
