import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mfauhsngm.css';
import '../../css/h/h39d0nilt.css';
import '../../css/i/ipdg3vquv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mfauhsngm"/><path class="h39d0nilt"/><path class="ipdg3vquv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sim"} {...others} />);
}

export default Component;
