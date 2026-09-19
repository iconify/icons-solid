import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ili7mtm7o.css';
import '../../css/c/cvrw8fbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ili7mtm7o"/><path class="cvrw8fbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:qr-code"} {...others} />);
}

export default Component;
