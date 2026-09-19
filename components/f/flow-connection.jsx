import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cv6iqoa1s.css';
import '../../css/c/c-vtk3_ct.css';
import '../../css/r/r92yvb8vr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cv6iqoa1s"/><path class="c-vtk3_ct"/><path class="r92yvb8vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flow-connection"} {...others} />);
}

export default Component;
