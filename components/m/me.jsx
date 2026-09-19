import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pt-0x-bak.css';
import '../../css/u/ub3citboa.css';
import '../../css/l/lxj99hpsx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="pt-0x-bak"/><path class="ub3citboa"/><path class="lxj99hpsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:me"} {...others} />);
}

export default Component;
