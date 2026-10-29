import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z7jrhlz4v.css';
import '../../css/p/ppsehacsp.css';
import '../../css/x/xgl_76o8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-k z7jrhlz4v"/><path class="ppsehacsp wm-a"/><circle class="wm-k xgl_76o8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rotate-cw-blueprint"} {...others} />);
}

export default Component;
