import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhk2u_byh.css';
import '../../css/k/ke0ka4ymk.css';
import '../../css/v/vdxrn18am.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhk2u_byh"/><path class="ke0ka4ymk"/><path class="vdxrn18am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-wheel-48"} {...others} />);
}

export default Component;
