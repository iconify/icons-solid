import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbssc1pdt.css';
import '../../css/v/vl4m-ybhi.css';
import '../../css/e/ekom2-fqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cbssc1pdt"/><path class="vl4m-ybhi"/><path class="ekom2-fqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:award-certificate"} {...others} />);
}

export default Component;
