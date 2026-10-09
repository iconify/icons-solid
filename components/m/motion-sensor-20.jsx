import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxmqlcbnm.css';
import '../../css/o/ot0n8509i.css';
import '../../css/v/vof4c6k-m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fxmqlcbnm"/><path class="ot0n8509i"/><path class="vof4c6k-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motion-sensor-20"} {...others} />);
}

export default Component;
