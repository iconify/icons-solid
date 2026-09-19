import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q1yp69b_l.css';
import '../../css/x/xx7uvyb5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q1yp69b_l"/><path class="xx7uvyb5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-down-right"} {...others} />);
}

export default Component;
