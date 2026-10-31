import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrvcoe4ke.css';
import '../../css/u/uzhnzhb4n.css';
import '../../css/i/iy2_fi8va.css';

const viewBox = {"width":301,"height":191};
const content = `<g class="ft5dv1b6b"><path class="zrvcoe4ke"/><path class="uzhnzhb4n"/><path class="iy2_fi8va"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ee"} {...others} />);
}

export default Component;
