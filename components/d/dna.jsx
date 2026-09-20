import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zi7qjjbiy.css';
import '../../css/d/d3r2wb0it.css';
import '../../css/k/k4l4-797u.css';
import '../../css/u/ul5rc3bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zi7qjjbiy"/><path class="d3r2wb0it"/><path class="k4l4-797u"/><path class="ul5rc3bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:dna"} {...others} />);
}

export default Component;
