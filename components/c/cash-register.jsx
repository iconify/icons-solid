import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o118l3y5l.css';
import '../../css/c/cq6bigbol.css';
import '../../css/b/bo61s2bfq.css';
import '../../css/x/x19_j9haf.css';
import '../../css/v/vqottxxxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="o118l3y5l wm-shadow"/><path class="cq6bigbol wm-shadow"/><path class="bo61s2bfq"/><path class="x19_j9haf"/><path class="vqottxxxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cash-register"} {...others} />);
}

export default Component;
