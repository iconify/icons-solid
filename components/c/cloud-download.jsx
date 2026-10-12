import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brgb34b4x.css';
import '../../css/o/odjrbuxck.css';
import '../../css/p/phf_bnd-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="brgb34b4x"/><path class="odjrbuxck"/><path class="phf_bnd-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-download"} {...others} />);
}

export default Component;
