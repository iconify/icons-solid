import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj9l6dm3r.css';
import '../../css/g/gxvh0c--h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mj9l6dm3r"/><path class="gxvh0c--h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:grid-3x3-off-filled"} {...others} />);
}

export default Component;
