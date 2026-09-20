import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zalyfhbtm.css';
import '../../css/k/kchwjibkd.css';
import '../../css/a/ax3y5rb-s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zalyfhbtm"/><path class="kchwjibkd"/><path class="ax3y5rb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:countdown-timer"} {...others} />);
}

export default Component;
