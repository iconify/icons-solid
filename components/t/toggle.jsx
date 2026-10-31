import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqau2tbwv.css';
import '../../css/i/ignagdcxc.css';
import '../../css/e/en3y03sqa.css';
import '../../css/v/vbjejdbwb.css';
import '../../css/h/hwf0jqgpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aqau2tbwv wm-shadow"/><path class="ignagdcxc wm-shadow"/><path class="en3y03sqa"/><path class="vbjejdbwb"/><path class="hwf0jqgpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:toggle"} {...others} />);
}

export default Component;
