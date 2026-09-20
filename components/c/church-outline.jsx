import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx6kp1g_z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zx6kp1g_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:church-outline"} {...others} />);
}

export default Component;
