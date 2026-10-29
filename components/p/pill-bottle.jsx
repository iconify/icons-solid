import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ochkgfbbu.css';
import '../../css/u/ubbtkbahf.css';
import '../../css/l/llcqigbrs.css';
import '../../css/j/jgq9-g7_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ochkgfbbu wm-k"/><path class="ubbtkbahf wm-a"/><path class="llcqigbrs wm-k"/><path class="jgq9-g7_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pill-bottle"} {...others} />);
}

export default Component;
