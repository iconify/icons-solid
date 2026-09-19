import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k9rwwkbxt.css';
import '../../css/d/du27q3r4y.css';
import '../../css/p/p7v5yf7rs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k9rwwkbxt"/><path class="du27q3r4y"/><path class="p7v5yf7rs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:insert-row-down"} {...others} />);
}

export default Component;
