import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/y/ye1eq_b_x.css';
import '../../css/h/hgs1qwcgh.css';
import '../../css/p/pskyl3w2k.css';
import '../../css/o/oh---cbyh.css';
import '../../css/m/mbv1kacka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="ye1eq_b_x"/><path class="hgs1qwcgh"/><path class="pskyl3w2k"/><path class="oh---cbyh"/><path class="mbv1kacka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-arrow-right"} {...others} />);
}

export default Component;
