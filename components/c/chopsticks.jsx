import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yh5j6vq8r.css';
import '../../css/x/xcd64_59i.css';
import '../../css/a/as8gjpbuf.css';
import '../../css/v/voqsglwkl.css';
import '../../css/o/o5fcxi8vb.css';
import '../../css/r/r_ce-fb6h.css';
import '../../css/s/shgmkcfyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yh5j6vq8r"/><path class="xcd64_59i"/><path class="as8gjpbuf wm-k"/><path class="voqsglwkl wm-a"/><path class="o5fcxi8vb"/><path class="r_ce-fb6h"/><path class="shgmkcfyh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chopsticks"} {...others} />);
}

export default Component;
