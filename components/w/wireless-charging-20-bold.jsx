import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9abdnbmo.css';
import '../../css/q/q2o__te3v.css';
import '../../css/g/g4vsmpb-w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x9abdnbmo"/><path class="q2o__te3v"/><path class="g4vsmpb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wireless-charging-20-bold"} {...others} />);
}

export default Component;
