import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxi8hkb5i.css';
import '../../css/l/lw72yprve.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/r3qvqygmn.css';
import '../../css/z/zt-41go0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxi8hkb5i"/><path clip-rule="evenodd" class="lw72yprve"/><g class="xtpeb-edw"><path class="r3qvqygmn"/><path class="zt-41go0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-round-bold-duotone"} {...others} />);
}

export default Component;
