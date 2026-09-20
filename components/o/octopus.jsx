import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1uvocoek.css';
import '../../css/c/cpzoy2bcj.css';
import '../../css/e/ep1f8xb-m.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bes_t3brz.css';
import '../../css/o/ocvinx6xs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k1uvocoek"/><path class="cpzoy2bcj"/><path class="ep1f8xb-m"/><g class="ij2x_72vy"><path class="bes_t3brz"/><path class="ocvinx6xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:octopus"} {...others} />);
}

export default Component;
