import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwgmdib_l.css';
import '../../css/o/opjlpfb1h.css';
import '../../css/s/s664m142x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pwgmdib_l"/><path class="opjlpfb1h"/><path class="s664m142x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pcb-20-bold"} {...others} />);
}

export default Component;
