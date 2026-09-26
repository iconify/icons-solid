import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j6fms_bnd.css';
import '../../css/d/d787out6m.css';
import '../../css/r/rmhwmnbwp.css';
import '../../css/n/norr5njek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j6fms_bnd"/><path class="d787out6m"/><path class="rmhwmnbwp"/><path class="norr5njek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-up-down-line-duotone"} {...others} />);
}

export default Component;
