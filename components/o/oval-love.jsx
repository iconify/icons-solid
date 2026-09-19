import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/ts3bucb9r.css';
import '../../css/c/czvyu3bip.css';
import '../../css/q/q4j5y5ckx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ts3bucb9r"/><path class="czvyu3bip"/><path class="q4j5y5ckx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:oval-love"} {...others} />);
}

export default Component;
