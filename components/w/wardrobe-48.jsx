import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svhifwbxd.css';
import '../../css/o/oxanvq5pj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="svhifwbxd"/><path class="oxanvq5pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wardrobe-48"} {...others} />);
}

export default Component;
