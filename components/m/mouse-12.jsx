import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/ws0weable.css';
import '../../css/p/pdmaa-4wh.css';
import '../../css/j/jcyhgg-5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ws0weable"/><path class="pdmaa-4wh"/><path class="jcyhgg-5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-12"} {...others} />);
}

export default Component;
