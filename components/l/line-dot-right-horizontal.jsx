import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/isclbpbxt.css';
import '../../css/b/bz8qefuqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="isclbpbxt"/><path class="bz8qefuqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:line-dot-right-horizontal"} {...others} />);
}

export default Component;
