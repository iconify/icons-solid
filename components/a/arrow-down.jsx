import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j4_nmj0ma.css';
import '../../css/n/nktcagb0b.css';
import '../../css/f/fi4q-dntr.css';
import '../../css/t/tba3_6bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j4_nmj0ma wm-shadow"/><path class="nktcagb0b wm-shadow"/><path class="fi4q-dntr"/><path class="tba3_6bfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-down"} {...others} />);
}

export default Component;
