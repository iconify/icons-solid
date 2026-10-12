import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcgu0xbag.css';
import '../../css/v/vllf8o60k.css';
import '../../css/h/h5dupz0ni.css';
import '../../css/t/tnyfbzber.css';
import '../../css/y/ytt4jwbgq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fcgu0xbag"/><path class="vllf8o60k"/><path class="h5dupz0ni"/><path class="tnyfbzber"/><path class="ytt4jwbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-3d-48"} {...others} />);
}

export default Component;
