import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itduwablw.css';
import '../../css/x/x_83sd0yc.css';
import '../../css/v/v1msn87zh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="itduwablw"/><path class="x_83sd0yc"/><path class="v1msn87zh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bank-card"} {...others} />);
}

export default Component;
