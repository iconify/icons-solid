import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kkm7v7wlq.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xxwofqeju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="kkm7v7wlq wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="xxwofqeju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-top-blueprint"} {...others} />);
}

export default Component;
