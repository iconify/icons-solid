import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk_mpr0sg.css';
import '../../css/q/qvws5acex.css';
import '../../css/v/vf-yj3bws.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 sk_mpr0sg"/><path class="clr-i-outline clr-i-outline-path-2 qvws5acex"/><path class="clr-i-outline clr-i-outline-path-3 vf-yj3bws"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:help-info-line"} {...others} />);
}

export default Component;
