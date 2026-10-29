import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/at84-ubob.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/jv-k-dbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="at84-ubob wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="jv-k-dbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-right-blueprint"} {...others} />);
}

export default Component;
