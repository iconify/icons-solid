import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8tm8wbyj.css';
import '../../css/g/g88eq9dnz.css';
import '../../css/d/dchmdubmn.css';
import '../../css/z/zakpfgeng.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d8tm8wbyj"/><path class="g88eq9dnz"/><path class="dchmdubmn"/><path class="zakpfgeng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gitlab"} {...others} />);
}

export default Component;
