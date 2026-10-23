import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4y8rg49z.css';
import '../../css/i/izz92k1yj.css';
import '../../css/o/orn-k1zwm.css';
import '../../css/y/y0iy5tb2a.css';
import '../../css/t/teslz7bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b4y8rg49z"/><path class="izz92k1yj"/><path class="orn-k1zwm"/><path class="y0iy5tb2a"/><path class="teslz7bcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:owl"} {...others} />);
}

export default Component;
