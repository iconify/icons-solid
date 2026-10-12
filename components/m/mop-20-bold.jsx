import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9--0ac3k.css';
import '../../css/x/xe4gu0bmx.css';
import '../../css/v/ve_wlnb3r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m9--0ac3k"/><path class="xe4gu0bmx"/><path class="ve_wlnb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mop-20-bold"} {...others} />);
}

export default Component;
