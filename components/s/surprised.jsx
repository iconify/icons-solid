import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/n/n-5umwbtl.css';
import '../../css/l/lyw6hj5zq.css';
import '../../css/g/g5kjkorhw.css';
import '../../css/u/ux920oebz.css';
import '../../css/r/rucxk0j0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="n-5umwbtl"/><path class="lyw6hj5zq"/><path class="g5kjkorhw"/><path class="ux920oebz"/><path class="rucxk0j0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:surprised"} {...others} />);
}

export default Component;
