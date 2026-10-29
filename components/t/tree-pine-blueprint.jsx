import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sq_jrmboe.css';
import '../../css/h/h8ktadizz.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/b/b33sfbyeh.css';
import '../../css/q/qxnk23bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sq_jrmboe wm-deco"/><path class="h8ktadizz wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="b33sfbyeh wm-k"/><path class="qxnk23bzr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tree-pine-blueprint"} {...others} />);
}

export default Component;
