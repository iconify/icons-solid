import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qmt4c6b-t.css';
import '../../css/g/gkh-qy8gy.css';
import '../../css/b/b_q4on72s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qmt4c6b-t"/><path class="gkh-qy8gy"/><path class="b_q4on72s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-orientation-bold"} {...others} />);
}

export default Component;
