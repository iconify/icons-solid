import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hv308dboi.css';
import '../../css/q/qa___lkpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hv308dboi"/><path class="qa___lkpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-crack-linear"} {...others} />);
}

export default Component;
