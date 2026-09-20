import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gahmtubsr.css';
import '../../css/l/l_c9lcbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gahmtubsr"/><path vector-effect="non-scaling-stroke" class="l_c9lcbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:pull-left"} {...others} />);
}

export default Component;
