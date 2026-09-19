import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qfgadhy5f.css';
import '../../css/x/x1tpzjbth.css';
import '../../css/j/jwu77k_om.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qfgadhy5f"/><path class="x1tpzjbth"/><path class="jwu77k_om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:at-sign"} {...others} />);
}

export default Component;
