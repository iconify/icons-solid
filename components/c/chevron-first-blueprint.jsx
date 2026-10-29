import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/otia_qs9v.css';
import '../../css/d/dk36_qbfc.css';
import '../../css/y/yltf94bxm.css';
import '../../css/c/chfexdi1f.css';
import '../../css/d/drdv4ab-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="otia_qs9v wm-deco"/><path class="dk36_qbfc wm-deco"/><path class="wm-k yltf94bxm"/><path class="chfexdi1f wm-a"/><path class="drdv4ab-w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-first-blueprint"} {...others} />);
}

export default Component;
