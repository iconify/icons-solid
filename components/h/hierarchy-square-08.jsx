import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c94s1ub5j.css';
import '../../css/n/n3t_kxb6u.css';
import '../../css/n/nw477oplc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c94s1ub5j"/><path class="n3t_kxb6u"/><path class="nw477oplc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-square-08"} {...others} />);
}

export default Component;
