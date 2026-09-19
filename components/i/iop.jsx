import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egi_1pwxy.css';
import '../../css/m/md286fbip.css';
import '../../css/v/vfgn4jl3j.css';
import '../../css/a/aie4qi4ix.css';
import '../../css/e/ew1t3mblt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="egi_1pwxy"/><g class="md286fbip"><path class="vfgn4jl3j"/><path class="aie4qi4ix"/><path class="ew1t3mblt"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:iop"} {...others} />);
}

export default Component;
