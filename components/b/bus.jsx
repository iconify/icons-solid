import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1u10bb5r.css';
import '../../css/n/njd-vd2hp.css';
import '../../css/e/ev1eyzb3m.css';
import '../../css/d/dl5he1bcc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g1u10bb5r"/><path class="njd-vd2hp"/><path class="ev1eyzb3m"/><path class="dl5he1bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bus"} {...others} />);
}

export default Component;
