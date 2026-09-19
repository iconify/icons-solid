import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/ks6fyd39x.css';
import '../../css/o/oo9_wtbyo.css';
import '../../css/a/aa7k_sbzz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ks6fyd39x"/><path class="oo9_wtbyo"/><path class="aa7k_sbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:broadcast-radio"} {...others} />);
}

export default Component;
