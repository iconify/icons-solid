import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlo-1-b1r.css';
import '../../css/u/u95w5ybee.css';
import '../../css/z/z7ly-0cgq.css';
import '../../css/h/ha43yw8ah.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tlo-1-b1r"/><path class="u95w5ybee"/><path class="z7ly-0cgq"/><path class="ha43yw8ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-48"} {...others} />);
}

export default Component;
