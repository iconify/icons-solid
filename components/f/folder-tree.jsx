import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yfxd0ye5j.css';
import '../../css/y/yd1ee9bay.css';
import '../../css/o/oy252v6ul.css';
import '../../css/l/l-1fk9ytw.css';
import '../../css/u/uanjz8m2o.css';
import '../../css/d/docx-1bwr.css';
import '../../css/m/mf8zze51n.css';
import '../../css/j/jp-ysbcce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yfxd0ye5j"/><path class="yd1ee9bay"/><path class="oy252v6ul wm-shine"/><path class="l-1fk9ytw wm-k"/><path class="uanjz8m2o wm-a"/><path class="docx-1bwr"/><path class="mf8zze51n"/><path class="jp-ysbcce wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folder-tree"} {...others} />);
}

export default Component;
