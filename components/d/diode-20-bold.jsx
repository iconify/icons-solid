import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6ni-hbcz.css';
import '../../css/l/l5s65ua6d.css';
import '../../css/k/k0lpkvdrp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d6ni-hbcz"/><path class="l5s65ua6d"/><path class="k0lpkvdrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:diode-20-bold"} {...others} />);
}

export default Component;
