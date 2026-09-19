import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpxwy_jwh.css';
import '../../css/k/kqmlytbco.css';
import '../../css/m/mw99uy5ni.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wpxwy_jwh"/><path class="kqmlytbco"/><path class="mw99uy5ni"/><path class="f86xz6sdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-pak-network-automation"} {...others} />);
}

export default Component;
