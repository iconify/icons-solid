import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8bvuvbpb.css';
import '../../css/g/ge-hqjguz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v8bvuvbpb"/><path class="ge-hqjguz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layer-bring-to-front"} {...others} />);
}

export default Component;
