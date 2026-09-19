import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xm2tn7pjb.css';
import '../../css/m/m01no-w0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xm2tn7pjb"/><path class="m01no-w0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-not-allowed-space-woman"} {...others} />);
}

export default Component;
