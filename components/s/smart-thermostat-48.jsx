import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/q/q_v_867tk.css';
import '../../css/t/t93ufpleg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="q_v_867tk"/><path class="t93ufpleg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-thermostat-48"} {...others} />);
}

export default Component;
