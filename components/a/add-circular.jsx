import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/u/u7tu3_vxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="u7tu3_vxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:add-circular"} {...others} />);
}

export default Component;
