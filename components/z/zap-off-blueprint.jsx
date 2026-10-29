import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jp9fg595t.css';
import '../../css/o/ofsvud-pe.css';
import '../../css/l/l3e3j8bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jp9fg595t wm-deco"/><path class="ofsvud-pe wm-k"/><path class="l3e3j8bfu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zap-off-blueprint"} {...others} />);
}

export default Component;
