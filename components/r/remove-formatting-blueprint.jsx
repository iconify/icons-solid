import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aygf7bbmo.css';
import '../../css/d/djt24lr8q.css';
import '../../css/b/bb31khzkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="aygf7bbmo wm-k"/><path class="djt24lr8q wm-k"/><path class="bb31khzkn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:remove-formatting-blueprint"} {...others} />);
}

export default Component;
