import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mez3sq6az.css';
import '../../css/f/f5mgz9qau.css';
import '../../css/i/in0d74b0s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mez3sq6az"/><path class="f5mgz9qau"/><path class="in0d74b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archery-48"} {...others} />);
}

export default Component;
