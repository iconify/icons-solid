import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km4a1v4td.css';
import '../../css/f/ffx-w--7f.css';
import '../../css/b/b5779lb1f.css';
import '../../css/x/x_nsue7wp.css';
import '../../css/w/wr80zwb9p.css';
import '../../css/v/v1c0w6baz.css';
import '../../css/z/z5sjmjb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="km4a1v4td wm-k"/><path class="ffx-w--7f wm-k"/><path class="b5779lb1f wm-k"/><path class="wm-a x_nsue7wp"/><path class="wm-a wr80zwb9p"/><path class="v1c0w6baz wm-a"/><path class="wm-shine z5sjmjb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:lasso"} {...others} />);
}

export default Component;
