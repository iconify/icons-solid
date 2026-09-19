import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qt0ef_bds.css';
import '../../css/z/zwuct7ykb.css';
import '../../css/k/k3y47ub7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qt0ef_bds"/><path class="zwuct7ykb"/><path class="k3y47ub7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mortar"} {...others} />);
}

export default Component;
