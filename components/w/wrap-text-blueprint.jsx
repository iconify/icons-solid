import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vg7o3iwek.css';
import '../../css/g/gbz5sj1lw.css';
import '../../css/o/orbxgqi3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vg7o3iwek wm-k"/><path class="gbz5sj1lw wm-k"/><path class="orbxgqi3s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wrap-text-blueprint"} {...others} />);
}

export default Component;
