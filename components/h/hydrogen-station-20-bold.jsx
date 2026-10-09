import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azc5oubyv.css';
import '../../css/q/q1hf-4bop.css';
import '../../css/p/pz9jt5fop.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="azc5oubyv"/><path class="q1hf-4bop"/><path class="pz9jt5fop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-station-20-bold"} {...others} />);
}

export default Component;
