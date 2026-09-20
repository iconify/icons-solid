import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_164b6-r.css';
import '../../css/p/ps8cdsd4a.css';
import '../../css/g/gd7kj3bra.css';
import '../../css/k/kkbwt8y6e.css';
import '../../css/y/ylils2_da.css';
import '../../css/n/nedihub9p.css';
import '../../css/n/ns6mo7clg.css';
import '../../css/z/zcxk7vgef.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r_164b6-r"/><path class="ps8cdsd4a"/><path class="gd7kj3bra"/><path class="kkbwt8y6e"/><path class="ylils2_da"/><path class="nedihub9p"/><path class="ns6mo7clg"/><path class="zcxk7vgef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:warehouse-1"} {...others} />);
}

export default Component;
