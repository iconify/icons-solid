import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ecude2y5f.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/p/pn0k_1bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ecude2y5f"/><path class="jvtjbnueh"/><path class="pn0k_1bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-square-01"} {...others} />);
}

export default Component;
