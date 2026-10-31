import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ta5copbhj.css';
import '../../css/h/hb2a_krih.css';
import '../../css/w/w3oktt3kj.css';
import '../../css/a/avb7c9bnj.css';
import '../../css/p/puipgzb4d.css';
import '../../css/n/n0mvu2bcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ta5copbhj wm-shadow"/><path class="hb2a_krih"/><path class="w3oktt3kj"/><path class="avb7c9bnj"/><path class="puipgzb4d"/><path class="n0mvu2bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:droplets"} {...others} />);
}

export default Component;
