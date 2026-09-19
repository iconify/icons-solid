import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ycwh3tb-y.css';
import '../../css/q/qdgw_cfex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ycwh3tb-y"/><path class="qdgw_cfex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pencil-ruler"} {...others} />);
}

export default Component;
