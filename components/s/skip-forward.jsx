import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yr6oyzbva.css';
import '../../css/b/b6ryy2bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yr6oyzbva"/><path class="b6ryy2bnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:skip-forward"} {...others} />);
}

export default Component;
