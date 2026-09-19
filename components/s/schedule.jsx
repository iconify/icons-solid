import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/j/j0nq1ogbv.css';
import '../../css/e/ec0z0rb7k.css';
import '../../css/g/gjuy1obec.css';
import '../../css/s/syw3b9bhc.css';
import '../../css/g/gvugorbzi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="j0nq1ogbv"/><path class="ec0z0rb7k"/><path class="gjuy1obec"/><path class="syw3b9bhc"/><path class="gvugorbzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:schedule"} {...others} />);
}

export default Component;
