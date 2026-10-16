import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs3s_acpz.css';
import '../../css/c/c36ktfb4d.css';
import '../../css/l/l5cqi8bbb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qs3s_acpz"/><path class="c36ktfb4d"/><path class="l5cqi8bbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circular-saw-20"} {...others} />);
}

export default Component;
