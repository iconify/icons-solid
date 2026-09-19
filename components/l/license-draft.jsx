import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tu0p47bht.css';
import '../../css/l/l2nars-_e.css';
import '../../css/o/os-5hqfau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tu0p47bht"/><path class="l2nars-_e"/><path class="os-5hqfau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:license-draft"} {...others} />);
}

export default Component;
