import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g25gybccv.css';
import '../../css/e/egh3d5cfd.css';
import '../../css/v/vvpeo-3dh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g25gybccv"/><path class="egh3d5cfd"/><path class="vvpeo-3dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-minus-20"} {...others} />);
}

export default Component;
