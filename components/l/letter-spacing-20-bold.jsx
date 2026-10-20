import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdbuaia-f.css';
import '../../css/h/hl_idtb9j.css';
import '../../css/l/l2_7mneno.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xdbuaia-f"/><path class="hl_idtb9j"/><path class="l2_7mneno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-spacing-20-bold"} {...others} />);
}

export default Component;
