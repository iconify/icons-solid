import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3bayrqp.css';
import '../../css/c/cuh4qccmh.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><rect class="pd3bayrqp"/><path class="cuh4qccmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apollodotio"} {...others} />);
}

export default Component;
