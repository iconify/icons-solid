import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/np-r4kire.css';
import '../../css/u/uuv6vcbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="np-r4kire"/><path class="uuv6vcbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-dimensions-01"} {...others} />);
}

export default Component;
