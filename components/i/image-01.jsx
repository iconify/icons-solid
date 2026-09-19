import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e2i1rhbxz.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/u/ufhz_q2qg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="e2i1rhbxz"/><path class="jvtjbnueh"/><path class="ufhz_q2qg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-01"} {...others} />);
}

export default Component;
