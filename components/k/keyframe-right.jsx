import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fg816bb5j.css';
import '../../css/n/nn3zcebwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fg816bb5j"/><path class="nn3zcebwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-right"} {...others} />);
}

export default Component;
