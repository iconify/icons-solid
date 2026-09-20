import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/efyrmtbde.css';
import '../../css/u/u_07p0rbf.css';
import '../../css/i/ilf33kbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="efyrmtbde"/><path class="u_07p0rbf"/><path class="ilf33kbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-clock"} {...others} />);
}

export default Component;
