import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj66k2bbx.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/y/y7n_q-bpf.css';
import '../../css/f/f3bu0o9cg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mj66k2bbx"/><g class="wtfmx7b3v"><path class="y7n_q-bpf"/><path class="f3bu0o9cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:negative-dynamic"} {...others} />);
}

export default Component;
