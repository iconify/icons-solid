import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2tm5x4ew.css';
import '../../css/x/x1m0prbrb.css';
import '../../css/d/d3t_gac1b.css';
import '../../css/n/n8_pa2b5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c2tm5x4ew"/><path class="x1m0prbrb"/><path class="d3t_gac1b"/><path class="n8_pa2b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:audio"} {...others} />);
}

export default Component;
