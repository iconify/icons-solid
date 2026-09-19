import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kx4smf8ff.css';
import '../../css/s/s-udsktty.css';
import '../../css/v/v3zb8-6oo.css';
import '../../css/t/t4l4_0yne.css';
import '../../css/p/p472gi8dg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kx4smf8ff"/><path class="s-udsktty"/><path class="v3zb8-6oo"/><path class="t4l4_0yne"/><path class="p472gi8dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quiz-04"} {...others} />);
}

export default Component;
