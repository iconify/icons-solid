import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_rvpzb5b.css';
import '../../css/v/vtogzbcjl.css';
import '../../css/h/hyap0y3ki.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n_rvpzb5b"/><path class="vtogzbcjl"/><path class="hyap0y3ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-closed-20"} {...others} />);
}

export default Component;
