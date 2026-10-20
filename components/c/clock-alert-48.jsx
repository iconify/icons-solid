import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np5fhxbwq.css';
import '../../css/d/drz3_kbcl.css';
import '../../css/w/w6jg5vb_d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="np5fhxbwq"/><path class="drz3_kbcl"/><path class="w6jg5vb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-alert-48"} {...others} />);
}

export default Component;
