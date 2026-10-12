import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9izbfnnz.css';
import '../../css/z/zcvl_djfq.css';
import '../../css/n/nb5t14bvr.css';
import '../../css/x/xy9ddj-ni.css';
import '../../css/n/nbqssjb9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c9izbfnnz"/><path class="zcvl_djfq"/><path class="nb5t14bvr"/><path class="xy9ddj-ni"/><path class="nbqssjb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radius-duotone"} {...others} />);
}

export default Component;
