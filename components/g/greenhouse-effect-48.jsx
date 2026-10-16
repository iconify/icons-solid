import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzwpf0b4o.css';
import '../../css/e/em99sdy4o.css';
import '../../css/t/t_pv4sbxm.css';
import '../../css/l/l-tauacug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kzwpf0b4o"/><path class="em99sdy4o"/><path class="t_pv4sbxm"/><path class="l-tauacug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-effect-48"} {...others} />);
}

export default Component;
