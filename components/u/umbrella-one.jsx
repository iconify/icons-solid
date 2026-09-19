import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lxo_d2rud.css';
import '../../css/g/gpho4gepl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lxo_d2rud"/><path class="gpho4gepl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:umbrella-one"} {...others} />);
}

export default Component;
