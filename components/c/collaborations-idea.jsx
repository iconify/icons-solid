import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nt1847b2n.css';
import '../../css/i/i5x355b3b.css';
import '../../css/k/kjklail5k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nt1847b2n"/><path class="i5x355b3b"/><path class="kjklail5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:collaborations-idea"} {...others} />);
}

export default Component;
