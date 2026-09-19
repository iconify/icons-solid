import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/d2472yyfz.css';
import '../../css/h/h5gs9jbmt.css';
import '../../css/g/gaapk4_pk.css';
import '../../css/l/ledbdf4nk.css';
import '../../css/q/qjsrhcbyt.css';
import '../../css/l/lmldo0b_i.css';
import '../../css/i/iodwtmbns.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="d2472yyfz"/><path class="h5gs9jbmt"/><path class="gaapk4_pk"/><path class="ledbdf4nk"/><path class="qjsrhcbyt"/><path class="lmldo0b_i"/><path class="iodwtmbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rule-two"} {...others} />);
}

export default Component;
