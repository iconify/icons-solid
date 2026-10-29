import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/ht0ikmt9b.css';
import '../../css/c/c2qq8ytpy.css';
import '../../css/o/oafn6i-xa.css';
import '../../css/r/r7u9ar3qi.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ht0ikmt9b wm-k"/><path class="c2qq8ytpy wm-k"/><path class="oafn6i-xa"/><path class="r7u9ar3qi"/><path class="wm-s xgn8g_bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:image-off"} {...others} />);
}

export default Component;
