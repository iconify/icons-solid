import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xc-r17bss.css';
import '../../css/s/sa32dzb4j.css';
import '../../css/e/enz6frzae.css';
import '../../css/l/lmt809bmo.css';
import '../../css/l/l44mq8b4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="xc-r17bss"/><path class="sa32dzb4j"/><path class="enz6frzae"/><path class="lmt809bmo"/><rect class="l44mq8b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:screenshot-one"} {...others} />);
}

export default Component;
