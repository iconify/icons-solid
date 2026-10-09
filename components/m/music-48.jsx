import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd66bdkym.css';
import '../../css/c/cuq6r7b0r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gd66bdkym"/><path class="cuq6r7b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:music-48"} {...others} />);
}

export default Component;
