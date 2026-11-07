import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-ste9rjs.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/bp5vlbc9d.css';
import '../../css/g/gam1sgbnn.css';
import '../../css/x/x047q_bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z-ste9rjs"/><g class="xtpeb-edw"><path class="bp5vlbc9d"/><path class="gam1sgbnn"/><path class="x047q_bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:house-bold-duotone"} {...others} />);
}

export default Component;
