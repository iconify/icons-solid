import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pp3v195nj.css';
import '../../css/e/eh39u_b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="pp3v195nj"/><path class="eh39u_b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:limit-order"} {...others} />);
}

export default Component;
