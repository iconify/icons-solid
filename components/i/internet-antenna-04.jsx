import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kd4lobgva.css';
import '../../css/e/e3c44ysnt.css';
import '../../css/d/duqj2zj1k.css';
import '../../css/f/fi19q96cf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kd4lobgva"/><path class="e3c44ysnt"/><path class="duqj2zj1k"/><path class="fi19q96cf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:internet-antenna-04"} {...others} />);
}

export default Component;
