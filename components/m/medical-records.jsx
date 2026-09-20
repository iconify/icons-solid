import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3avu39bx.css';
import '../../css/m/mgwh73i-d.css';
import '../../css/h/hyk4wfaif.css';
import '../../css/e/ehn65vx3h.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="j3avu39bx"/><path class="mgwh73i-d"/><path class="hyk4wfaif"/><path class="ehn65vx3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:medical-records"} {...others} />);
}

export default Component;
