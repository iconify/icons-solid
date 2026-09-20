import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jqdce2k4j.css';
import '../../css/o/om4lnzbpu.css';
import '../../css/y/yg_stwb0g.css';
import '../../css/c/c0piegl7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jqdce2k4j"/><path class="om4lnzbpu"/><path class="yg_stwb0g"/><path class="c0piegl7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-input-line-duotone"} {...others} />);
}

export default Component;
