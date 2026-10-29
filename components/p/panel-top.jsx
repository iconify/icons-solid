import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syk1us2fg.css';
import '../../css/o/ob9_5nbbe.css';
import '../../css/g/gth95mb7o.css';
import '../../css/z/zxqj3r0da.css';
import '../../css/h/hff6qok6f.css';
import '../../css/a/agex9k6ym.css';
import '../../css/m/mu3xycbhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="syk1us2fg wm-shadow"/><path class="ob9_5nbbe wm-k"/><path class="gth95mb7o wm-k"/><path class="wm-k zxqj3r0da"/><path class="hff6qok6f wm-k"/><path class="agex9k6ym wm-k"/><path class="mu3xycbhf wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:panel-top"} {...others} />);
}

export default Component;
