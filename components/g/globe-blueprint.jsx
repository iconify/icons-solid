import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yq4w0ibij.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/x/xtdeyac8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yq4w0ibij"/><path class="o7-ag87sb wm-deco"/><path class="xtdeyac8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-blueprint"} {...others} />);
}

export default Component;
