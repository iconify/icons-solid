import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kg35o5bpv.css';
import '../../css/z/z4hbfskwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kg35o5bpv"/><path class="z4hbfskwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:diaper"} {...others} />);
}

export default Component;
