import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wk5rfgbqe.css';
import '../../css/o/op_okdbeb.css';
import '../../css/h/h2l94nbab.css';
import '../../css/c/c4os28b0e.css';
import '../../css/r/rjc1qrwdd.css';
import '../../css/d/dvga0bbmq.css';
import '../../css/t/tlobht_qb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="wk5rfgbqe"/><path class="op_okdbeb"/><path class="h2l94nbab"/><path class="c4os28b0e"/><path class="rjc1qrwdd"/><path class="dvga0bbmq"/><path class="tlobht_qb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trunk"} {...others} />);
}

export default Component;
