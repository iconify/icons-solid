import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d66w67d0w.css';
import '../../css/z/zmq5k3b_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d66w67d0w"/><path vector-effect="non-scaling-stroke" class="zmq5k3b_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:justify-top"} {...others} />);
}

export default Component;
