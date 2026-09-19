import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/in0jghbyd.css';
import '../../css/a/ardd_2b9b.css';
import '../../css/y/ya7jsccar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="in0jghbyd"/><path class="ardd_2b9b"/><path class="ya7jsccar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:master-card"} {...others} />);
}

export default Component;
