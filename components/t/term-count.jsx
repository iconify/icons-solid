import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lb_kdwbtk.css';
import '../../css/u/ubavovb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lb_kdwbtk"/><path class="ubavovb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:term-count"} {...others} />);
}

export default Component;
