import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xkpkzmbva.css';
import '../../css/g/gu930pb7q.css';
import '../../css/k/k2fmkxbgw.css';
import '../../css/g/ga83e6b3i.css';
import '../../css/x/xmqcpbcif.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xkpkzmbva"/><path class="gu930pb7q"/><path class="k2fmkxbgw"/><path class="ga83e6b3i"/><path class="wm-shine xmqcpbcif"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:octagon-alert"} {...others} />);
}

export default Component;
