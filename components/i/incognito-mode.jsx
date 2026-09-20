import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/zx9_gmbnh.css';
import '../../css/l/l_w9r2z_j.css';
import '../../css/u/uykzql27n.css';
import '../../css/r/r1y1iqgqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="zx9_gmbnh"/><path class="l_w9r2z_j"/><path class="uykzql27n"/><path class="r1y1iqgqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:incognito-mode"} {...others} />);
}

export default Component;
