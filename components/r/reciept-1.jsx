import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lytv7zf4z.css';
import '../../css/y/y7ss-ysib.css';
import '../../css/i/irw22q-lp.css';
import '../../css/d/d5ni959cp.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="lytv7zf4z"/><path class="y7ss-ysib"/><path class="irw22q-lp"/><path class="d5ni959cp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:reciept-1"} {...others} />);
}

export default Component;
