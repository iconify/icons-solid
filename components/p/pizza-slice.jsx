import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6zn6abhh.css';
import '../../css/q/q_f8gu14x.css';
import '../../css/g/gcioct8bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="e6zn6abhh"/><path class="q_f8gu14x"/><path class="gcioct8bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pizza-slice"} {...others} />);
}

export default Component;
