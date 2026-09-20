import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c20fdyblc.css';
import '../../css/c/cxzxezbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c20fdyblc"/><path class="cxzxezbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:check-read-line-duotone"} {...others} />);
}

export default Component;
