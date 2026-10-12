import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_vodpr_t.css';
import '../../css/z/z0mp7-b9d.css';
import '../../css/l/l724hebta.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_vodpr_t"/><path class="z0mp7-b9d"/><path class="l724hebta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blood-drop-20"} {...others} />);
}

export default Component;
