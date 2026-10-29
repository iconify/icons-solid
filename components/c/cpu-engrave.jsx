import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i8s8sughv.css';
import '../../css/u/umh3pebfp.css';
import '../../css/v/vjsd4sbgq.css';
import '../../css/k/kx9parvdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i8s8sughv wm-k"/><path class="umh3pebfp wm-shadow"/><path class="vjsd4sbgq wm-k"/><path class="kx9parvdn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cpu-engrave"} {...others} />);
}

export default Component;
