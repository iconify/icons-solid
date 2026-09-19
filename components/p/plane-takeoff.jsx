import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-x-cbbtm.css';
import '../../css/d/dv62wvbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d-x-cbbtm"/><path clip-rule="evenodd" class="dv62wvbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plane-takeoff"} {...others} />);
}

export default Component;
