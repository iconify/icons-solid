import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owmyv-bwt.css';
import '../../css/z/zobtaob_b.css';
import '../../css/a/a6h11icdc.css';
import '../../css/p/pts2-acil.css';
import '../../css/j/jkpkp9brv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="owmyv-bwt"/><path class="zobtaob_b"/><path class="a6h11icdc"/><path class="pts2-acil"/><path class="jkpkp9brv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ssd-round-linear"} {...others} />);
}

export default Component;
