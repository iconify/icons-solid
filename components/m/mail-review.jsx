import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/ha1m0acqh.css';
import '../../css/w/wkxwu3bsi.css';
import '../../css/t/t_1ysd53k.css';
import '../../css/f/fxoqbf0fg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ha1m0acqh"/><path class="wkxwu3bsi"/><path class="t_1ysd53k"/><path class="fxoqbf0fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mail-review"} {...others} />);
}

export default Component;
