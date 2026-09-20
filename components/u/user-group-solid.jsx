import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1dq8obpb.css';
import '../../css/b/b496zp8dc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="n1dq8obpb"/><path class="b496zp8dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:user-group-solid"} {...others} />);
}

export default Component;
