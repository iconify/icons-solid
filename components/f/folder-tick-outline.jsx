import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3ke_fu8s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m3ke_fu8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:folder-tick-outline"} {...others} />);
}

export default Component;
