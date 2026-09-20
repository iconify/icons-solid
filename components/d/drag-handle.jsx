import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ue_n1y71q.css';
import '../../css/g/gq61baboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ue_n1y71q"/><path vector-effect="non-scaling-stroke" class="gq61baboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:drag-handle"} {...others} />);
}

export default Component;
