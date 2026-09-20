import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wkaubtbym.css';
import '../../css/d/d7v8u-bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="wkaubtbym"/><path class="d7v8u-bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:humidity-sharp-two-tone"} {...others} />);
}

export default Component;
