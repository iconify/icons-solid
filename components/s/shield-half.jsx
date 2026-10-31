import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yricu9bwx.css';
import '../../css/b/bd9yc0_lt.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/f/fr7k7ybsp.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yricu9bwx"/><path class="bd9yc0_lt wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="fr7k7ybsp wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shield-half"} {...others} />);
}

export default Component;
