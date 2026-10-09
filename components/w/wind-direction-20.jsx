import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_rzrek6p.css';
import '../../css/v/vqp7s7b9z.css';
import '../../css/r/rbecf_bsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x_rzrek6p"/><path class="vqp7s7b9z"/><path class="rbecf_bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-direction-20"} {...others} />);
}

export default Component;
