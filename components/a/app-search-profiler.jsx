import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu7wcxhpc.css';
import '../../css/q/q7cfilbkd.css';
import '../../css/y/ymqozubcz.css';
import '../../css/b/bvmpmfbtm.css';
import '../../css/g/g_hn3zuqp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary yu7wcxhpc"/><path class="q7cfilbkd"/><path class="ouiIcon__fillSecondary ymqozubcz"/><path class="bvmpmfbtm"/><path class="g_hn3zuqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-search-profiler"} {...others} />);
}

export default Component;
