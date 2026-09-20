import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ywal2zbon.css';
import '../../css/j/jied2xsjb.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ywal2zbon"/><path class="jied2xsjb"/><path class="dx93_50hj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-sharp-duotone"} {...others} />);
}

export default Component;
