import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/g4z8pwbhj.css';
import '../../css/l/l3-7g0o7n.css';
import '../../css/y/yiws--bkt.css';
import '../../css/o/oh---cbyh.css';
import '../../css/s/sqao3vs_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="g4z8pwbhj"/><path class="l3-7g0o7n"/><path class="yiws--bkt"/><path class="oh---cbyh"/><path class="sqao3vs_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-arrow-left"} {...others} />);
}

export default Component;
