import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjohp7bgw.css';
import '../../css/m/mipqo9b_v.css';
import '../../css/j/jxdpwusdl.css';
import '../../css/s/s1k8abbfk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fjohp7bgw"/><path class="mipqo9b_v"/><path class="jxdpwusdl"/><path class="s1k8abbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:curtailment-48-bold"} {...others} />);
}

export default Component;
