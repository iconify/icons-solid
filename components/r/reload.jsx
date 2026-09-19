import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsdw4zbiz.css';
import '../../css/k/k4ub4p2ey.css';
import '../../css/b/bzxe9qa1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dsdw4zbiz"/><path class="k4ub4p2ey"/><path class="bzxe9qa1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:reload"} {...others} />);
}

export default Component;
