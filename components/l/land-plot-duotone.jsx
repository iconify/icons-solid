import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqrqe6d4m.css';
import '../../css/o/ox4m8-_0l.css';
import '../../css/e/ebg151mhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gqrqe6d4m"/><path class="ox4m8-_0l"/><path class="ebg151mhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:land-plot-duotone"} {...others} />);
}

export default Component;
