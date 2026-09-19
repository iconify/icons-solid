import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m35bpgbdz.css';
import '../../css/d/ds4ya4b-u.css';
import '../../css/u/uzaovqzzs.css';
import '../../css/z/zu1rz0b_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m35bpgbdz"/><path class="ds4ya4b-u"/><path class="uzaovqzzs"/><path class="zu1rz0b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:documenttextpicture"} {...others} />);
}

export default Component;
