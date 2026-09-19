import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsw5so5pt.css';
import '../../css/t/tm3avkrlq.css';
import '../../css/g/g5s0ynieo.css';
import '../../css/k/ks7wf3l0a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsw5so5pt"/><circle class="tm3avkrlq"/><path class="g5s0ynieo"/><path class="ks7wf3l0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:picture"} {...others} />);
}

export default Component;
