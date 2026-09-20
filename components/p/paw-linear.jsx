import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/of1pldrdd.css';
import '../../css/s/so-kyjbpx.css';
import '../../css/f/fq2vfgfhg.css';
import '../../css/m/m-0j5bclz.css';
import '../../css/g/gzr_n4aup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="of1pldrdd"/><path class="so-kyjbpx"/><path class="fq2vfgfhg"/><path class="m-0j5bclz"/><path class="gzr_n4aup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paw-linear"} {...others} />);
}

export default Component;
