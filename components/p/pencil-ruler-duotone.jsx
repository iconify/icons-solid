import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ov3kx17-r.css';
import '../../css/f/f8hm-2p5o.css';
import '../../css/g/gffkyipjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ov3kx17-r"/><path class="f8hm-2p5o"/><path class="gffkyipjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pencil-ruler-duotone"} {...others} />);
}

export default Component;
